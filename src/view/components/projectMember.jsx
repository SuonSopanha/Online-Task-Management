import React, { useState, useEffect, useContext } from "react";
import { getUserByID } from "../../firebase/usersCRUD";
import { getprojecByID } from "../../firebase/projectCRUD";
import UserProfilePic from "../../utils/photoGenerator";
import { FaClipboardList, FaPlusCircle, FaPlusSquare } from "react-icons/fa";
import { modalContext } from "../part/test";
import { useNavigate } from "react-router-dom";

const ProjectMember = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [teamProjects, setTeamProjects] = useState([]);
  const { tabID } = useContext(modalContext);
  const navigate = useNavigate();

  const addMember = async (user) => {
    navigate('/team',{ state: { project_id: tabID} });
  };

 
  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        // Fetch project based on tabID
        const project = await getprojecByID(tabID);
        if (!project || !project.members) {
          console.warn("Project or members are undefined.");
          return;
        }
        console.log(project)
  
        const teamMemberUserIds = project.members.map((member) => member.id);
  
        console.log(teamMemberUserIds);
  
        if (teamMemberUserIds.length === 0) {
          console.warn("No team members found.");
          return;
        }
  
        const memberPromises = teamMemberUserIds.map(async (userId) => {
          const user = await getUserByID(userId);
          return user;
        });
  
        const teamMembers = await Promise.all(memberPromises);
  
        setTeamMembers(teamMembers.filter((member) => member !== null)); // Filter out null values
      } catch (error) {
        // Handle errors if needed
        console.error("Error fetching team data:", error);
      }
    };
  
    fetchTeamData();
  }, [tabID]);

  // Render your component based on teamMembers and teamProjects
  // ...

  return (
    <>
      <div class="container mx-auto flex flex-col lg:flex-row lg:space-x-4 mt-3">
        <div class="flex flex-col mx-4">
          <div className="w-full h-fit  bg-glasses backdrop-blur-12 px-4 py-2 space-y-5 rounded-xl mb-4">
            <h1 className="text-2xl font-semibold text-gray-700 pt-2">
              Member
            </h1>
            {console.log(teamMembers, teamProjects)}
            <div className="grid gap-10 row-gap-8 mx-auto sm:row-gap-10 lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-3 pb-2">
              {teamMembers.map((member, index) =>
                member !== null ? (
                  <div className="flex items-center" key={index}>
                    {member.photoURL !== null ? (
                      <img
                        className="object-cover w-12 h-12 mr-4 rounded-full shadow"
                        src={member.photoURL}
                        alt="Person"
                      />
                    ) : (
                      <div className="object-cover w-12 h-12 mr-4 rounded-full shadow">
                        <UserProfilePic name={member.full_name} size={12} />
                      </div>
                    )}

                    <div className="flex flex-col justify-center">
                      <p className="text-sm text-gray-700 font-bold">
                        {member.full_name}
                      </p>
                      <p className="text-xs text-gray-500">{member.role}</p>
                    </div>
                  </div>
                ) : null
              )}
              <button onClick={addMember} className="flex items-center">
                <div className="object-cover w-12 h-12 mr-4 rounded-full shadow flex items-center justify-center">
                  <FaPlusCircle className="w-full h-full text-gray-400"></FaPlusCircle>
                </div>

                <div className="flex flex-col justify-center">
                  <p className="text-sm text-gray-700 font-bold">Add member</p>
                </div>
              </button>
            </div>
          </div>


        </div>
        {console.log(teamProjects)}

      </div>
    </>
  );
};

export default ProjectMember;
