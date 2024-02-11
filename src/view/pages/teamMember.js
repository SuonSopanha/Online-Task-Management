import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserByEmail } from "../../firebase/usersCRUD";
import { useLocation } from "react-router-dom";
import { updateProject ,updateByPushNewMembers} from "../../firebase/projectCRUD";

const TeamMember = () => {
  const [emails, setEmails] = useState([""]);

  const location = useLocation();
  const { state } = location;

  // Now you can access the state object
  const { team_id } = state;



  const navigate = useNavigate();
  const addInputRow = () => {
    setEmails([...emails, ""]);
  };

  const handleEmailChange = (index, value) => {
    const newEmails = [...emails];
    newEmails[index] = value;
    setEmails(newEmails);
  };

  const handleContinue = async () => {
    // Filter out empty emails
    const nonEmptyEmails = emails.filter((email) => email.trim() !== '');
  
    // Use getUserByEmail for each non-empty email to get user ID
    const userIds = await Promise.all(
      nonEmptyEmails.map(async (email) => {
        const user = await getUserByEmail(email);
        return user ? user.id : null;
      })
    );
  
    // Filter out null values (for emails that didn't match any user)
    const validUserIds = userIds.filter((userId) => userId !== null);
  
    // Find invalid user IDs and corresponding emails
    const invalidUsers = nonEmptyEmails
      .map((email, index) => (userIds[index] === null ? email : null))
      .filter(Boolean);
  
    if (invalidUsers.length > 0) {
      // Alert the user about invalid emails
      alert(`Invalid emails: ${invalidUsers.join(', ')}`);
    }else{
      const members = validUserIds.map((userId) => ({ id: userId }));
      console.log( members);
      await updateByPushNewMembers(team_id, members);

      // Navigate to the next page or perform any other logic
      navigate("/app"); 
    }
  
    // Update the members state with valid user IDs

    // Navigate to the next page or perform any other logic
    // navigate("/next-page"); // Replace "/next-page" with your desired route
  };
  

  return (
    <>
      <div className="p-10">
        <div>
          <p className="mb-4 text-3xl font-medium">
            Invite a teammate to try PAS together
          </p>
          <p>You can start small by inviting a trusted teammate to</p>
          <p>learn how PAS works with you.</p>
        </div>

        <div className="mt-2">
          <p className="font-medium">Email Address</p>
          {emails.map((email, index) => (
            <div key={index}>
              <input
                className="focus:shadow-outline focus:border-blue-300 mt-1 w-96 appearance-none rounded-xl border-2 px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none font-medium"
                type="text"
                placeholder="Teammate's email"
                value={email}
                onChange={(e) => handleEmailChange(index, e.target.value)}
              />
            </div>
          ))}
        </div>
        <button
          className="mt-4 h-10 w-28 mr-2 rounded-xl bg-blue-700 text-white font-medium"
          onClick={addInputRow}
        >
          Add More
        </button>
        <button
          className="mt-4 h-10 w-28 rounded-xl bg-blue-700 text-white font-medium"
          onClick={handleContinue}
        >
          Continue
        </button>
      </div>
    </>
  );
};

export default TeamMember;
