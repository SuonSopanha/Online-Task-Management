import {
  collection,
  updateDoc,
  doc,
  setDoc,
  query,
  where,
  getDocs,
  deleteDoc,
  addDoc,
  onSnapshot,
  getDoc,
} from "firebase/firestore";

import { auth, db } from "./config";
import { getUserByID } from "./usersCRUD";

var data = [
  
    {
      name: "Pannier",
      description: "Team A description",
      members: [],
      milestones: [],
      teamMessage: [
        {
          sender_id: "60fab214-127d-4450-b36d-ca8512a371c1",
          message_text: "I'm good",
          date: "10/26/2023",
          time: "4:04 AM",
        },
        {
          sender_id: "28d40448-24c4-452c-ada6-c69d09e12169",
          message_text: "thanks! How about you?",
          date: "10/28/2023",
          time: "5:27 AM",
        },
        {
          sender_id: "ff0f390c-98a1-4f96-81ed-b8922d49e076",
          message_text: "I'm good",
          date: "11/30/2023",
          time: "7:35 PM",
        },
        {
          sender_id: "6ce69177-ac88-4164-b0bc-fe14bbe193f1",
          message_text: "how are you?",
          date: "12/16/2023",
          time: "6:22 AM",
        },
      ],
    },
    {
      name: "Prodder",
      description: "Team A description",
      members: [
        {
          user_id: "4cd8508e-5e3d-45ae-9cdd-7b08a1709618",
          role: "Software Engineer II",
        },
        {
          user_id: "25ba8740-d994-488c-bf63-f2adc5b00247",
          role: "Desktop Support Technician",
        },
        {
          user_id: "93841169-57b9-43f1-8895-5f1e0d37bf34",
          role: "Structural Engineer",
        },
        {
          user_id: "fa65dbe7-a641-41dd-8d4f-eb5c3d7f086e",
          role: "Executive Secretary",
        },
      ],
      milestones: [
        {
          milestone_name: "Milestone 1",
          completed: false,
          due_date: "11/23/2023",
        },
        {
          milestone_name: "Milestone 1",
          completed: true,
          due_date: "12/31/2023",
        },
        {
          milestone_name: "Milestone 1",
          completed: true,
          due_date: "11/20/2023",
        },
        {
          milestone_name: "Milestone 1",
          completed: false,
          due_date: "10/30/2023",
        },
        {
          milestone_name: "Milestone 1",
          completed: true,
          due_date: "10/09/2023",
        },
      ],
      teamMessage: [
        {
          sender_id: "4859d20a-676e-4f23-b2e5-ae9cb86ad694",
          message_text: "how are you?",
          date: "10/03/2023",
          time: "2:53 PM",
        },
      ],
    },
    {
      name: "Tin",
      description: "Team A description",
      members: [
        {
          user_id: "1b84f093-76b3-45a5-8c9f-46acf5033b77",
          role: "Senior Editor",
        },
        {
          user_id: "fabf2393-c889-4822-809c-dc6e21c1cbd3",
          role: "Research Associate",
        },
        {
          user_id: "75ec9063-e506-434b-8dce-44fd8c8e439b",
          role: "Help Desk Operator",
        },
      ],
      milestones: [],
      teamMessage: [],
    },
    {
      name: "Flowdesk",
      description: "Team A description",
      members: [
        {
          user_id: "44c0d10c-c47f-499f-941a-2f9b39c0228f",
          role: "Geologist II",
        },
        {
          user_id: "52c0311f-a592-4559-ac4e-4ef62b277b19",
          role: "Graphic Designer",
        },
        {
          user_id: "0ff71dc0-04a6-4b37-b211-28c47c931b9a",
          role: "Account Representative II",
        },
        {
          user_id: "8ade877f-6b70-4b0a-8767-6b2ceefb80a9",
          role: "Software Engineer I",
        },
      ],
      milestones: [],
      teamMessage: [
        {
          sender_id: "91312344-05f3-4259-881d-d14222c595d3",
          message_text: "how are you?",
          date: "11/11/2023",
          time: "12:22 AM",
        },
        {
          sender_id: "def8ab86-b1a6-4faa-b98d-ad0e53427ec6",
          message_text: "Hello",
          date: "11/11/2023",
          time: "6:55 PM",
        },
      ],
    },
    {
      name: "Duobam",
      description: "Team A description",
      members: [],
      milestones: [],
      teamMessage: [
        {
          sender_id: "0edce335-a316-4a43-ba3d-e5352184a9cc",
          message_text: "I'm good",
          date: "10/02/2023",
          time: "4:37 PM",
        },
        {
          sender_id: "ccac6814-e9ba-4982-9d9b-1adeb452c5b6",
          message_text: "I'm good",
          date: "12/09/2023",
          time: "6:04 PM",
        },
        {
          sender_id: "4bd93cb0-2a06-4ced-ad4d-0ecd7a84ecc9",
          message_text: "Hello",
          date: "11/16/2023",
          time: "11:03 AM",
        },
        {
          sender_id: "d8478e20-3927-4bc0-8425-49c03791346a",
          message_text: "thanks! How about you?",
          date: "11/21/2023",
          time: "1:38 PM",
        },
        {
          sender_id: "715e1b54-2e13-4e84-b97a-3e594c378f4c",
          message_text: "I'm good",
          date: "11/01/2023",
          time: "6:36 AM",
        },
      ],
    },
];

const addAllTeam = async () => {
  try {
    // Reference to the projects collection
    const team_collection = collection(db, "teams");

    // Loop through each project and add it to Firestore
    for (const team of data) {
      // Add project data to Firestore
      const docRef = await addDoc(team_collection, team);
      console.log("Document written with ID: ", docRef.id);
    }

    console.log("All documents added successfully.");
  } catch (error) {
    console.error("Error adding documents: ", error);
  }
};

const getRtTeamsByUserId = async (id, setChange) => {
    try {
      const q = query(collection(db, "teams"));
      
      const querySnapshot = await getDocs(q);
  
      const teams = querySnapshot.docs
        .map((doc) => ({ id: doc.id, ...doc.data() }))
        .filter((team) => team.members.some(member => member.user_id === id));
  
      setChange((prev) => [...prev, ...teams]);
      
      console.log(teams);
    } catch (error) {
      console.error("Error querying teams: ", error);
    }
  };
  

// const getTeamByID = async (id) => {
//   try {
//     const docRef = doc(db, "teams", id);
//     const docSnap = await getDoc(docRef);
//     if (docSnap.exists()) {
//       return docSnap.data();
//     } else {
//       console.log("No such document!");
//     }
//   } catch (error) {
//     console.error("Error getting document:", error);
//   }
// };

const getTeamByID = async (id) => {
  try {
    const docRef = doc(db, "teams", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const teamData = docSnap.data();
      const memberObjects = teamData.members;

      // Extract member IDs from the array of objects
      const memberIds = memberObjects.map((member) => member.id);

      // Assuming you have a function to get a user by ID
      const getUsersPromises = memberIds.map((memberId) => getUserByID(memberId));

      // Wait for all user queries to resolve
      const usersData = await Promise.all(getUsersPromises);

      // Now you can do something with the team data and the user data
      console.log("Team Data:", teamData);
      console.log("Users Data:", usersData);

      // For example, you might want to add user data to the team
      const teamWithUsers = {
        ...teamData,
        members: usersData,
      };

      return teamWithUsers;
    } else {
      console.log("No such document!");
      return {};
    }
  } catch (error) {
    console.error("Error getting document:", error);
    return {};
  }
};


export {addAllTeam, getRtTeamsByUserId, getTeamByID};
