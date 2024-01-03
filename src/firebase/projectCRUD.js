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
    getDoc
  } from "firebase/firestore";
  
  import { auth, db } from "./config";


// add bulk of data to db

var data = [
   {"project_name":"Fahey, O'Kon and Keeling","owner_id":"sKHk4pGBMGO9JYbuLHz1VX7cBBI3","members":[{"id":"32a96399-b55d-44c9-b988-4183c135ded9"}],"tasks":[{"id":"06824251-056c-46dc-9c8f-6b50b4caa113"},{"id":"3c8714ed-8a41-42ed-a6bd-95198217f3c9"},{"id":"53388fdf-3cdd-4b11-a39b-8f7933dbc474"},{"id":"3fc59544-2ea7-460b-9f67-d443176faade"},{"id":"99fda269-4d30-43f6-944b-a1feca6520c4"},{"id":"7c641a1f-0452-48b8-87c6-5a27c97dbf20"},{"id":"9041fb6b-0f67-4b21-bb19-018a994686a8"}],"team_id":"6e6f6c28-1315-41c2-969f-18900f17b3fd","start_date":"11/30/2023","end_date":"12/30/2023"},
    {"project_name":"Ebert LLC","owner_id":"sKHk4pGBMGO9JYbuLHz1VX7cBBI3","members":[{"id":"895ff95d-88b3-48d5-945d-f58bddead79c"},{"id":"71750e6e-a231-4875-a70a-65fada9554f9"},{"id":"a74604c5-7808-4852-81fd-1e9da7add02b"}],"tasks":[{"id":"cf0597d6-17b2-402b-90d1-8abead7b7dbb"},{"id":"307049c1-f771-4091-8157-8dc8bfcaccba"},{"id":"6c01965d-5d18-4f29-9c55-3b0810d7bdd0"},{"id":"247682c0-cefe-4500-8d27-dcc0e518307d"},{"id":"db8751be-3091-4923-957b-2cb046c849f7"},{"id":"b63b5361-edc4-47e2-9bf5-aaafd565fe30"},{"id":"fed164c2-83d9-4b73-808a-92a4fb199823"},{"id":"385df2d9-20ed-490c-b3d5-d59a383e48b4"},{"id":"34d42a5f-5d41-4b65-b77b-6af220a401c9"}],"team_id":"d74a23f7-85f8-4b72-a8f8-19b24e95dd76","start_date":"11/30/2023","end_date":"12/30/2023"},
   {"project_name":"Rogahn, Rowe and Kohler","owner_id":"sKHk4pGBMGO9JYbuLHz1VX7cBBI3","members":[{"id":"5604b1e9-6f92-448d-910a-d01f66a8721c"}],"tasks":[{"id":"3bd8a449-41e2-4fe1-a2e0-1fc85fdd9db4"},{"id":"74a287ed-d390-4353-891f-090db5208c16"},{"id":"dbf6e4c2-54c0-4de7-9b11-2f19382c6c41"},{"id":"03a3d173-a781-4cf3-bd9e-618466ba7339"},{"id":"0821fde4-7c93-4806-afe4-0bce3a6c4248"},{"id":"609c5378-66a2-4723-bbb0-277e1cac6424"}],"team_id":"e0c29da3-5804-470c-bf17-2caac8b024a5","start_date":"11/30/2023","end_date":"12/30/2023"},
   {"project_name":"Schaefer, McCullough and Carroll","owner_id":"sKHk4pGBMGO9JYbuLHz1VX7cBBI3","members":[],"tasks":[],"team_id":"319eaea5-ba47-4c3d-8e05-4634e0d408be","start_date":"11/30/2023","end_date":"12/30/2023"},
   {"project_name":"Schuster Inc","owner_id":"sKHk4pGBMGO9JYbuLHz1VX7cBBI3","members":[{"id":"9b524b83-5e57-479b-a79a-9d98e4d925c7"},{"id":"37a7164d-d870-499d-8510-797f298ed7a3"},{"id":"9a29f266-b2be-410a-a06e-116618424492"},{"id":"076da307-364e-4dbe-a8f3-725bc1fc670e"}],"tasks":[],"team_id":"48a9b475-b345-4304-8409-ab2cb6da288c","start_date":"11/30/2023","end_date":"12/30/2023"}
]

// add all data to firestore project collection
const addAllProjects = async () => {
    try {
      // Reference to the projects collection
      const projectsCollection = collection(db, "projects");
  
      // Loop through each project and add it to Firestore
      for (const projectData of data) {
        // Add project data to Firestore
        const docRef = await addDoc(projectsCollection, projectData);
        console.log("Document written with ID: ", docRef.id);
      }
  
      console.log("All documents added successfully.");
    } catch (error) {
      console.error("Error adding documents: ", error);
    }
};

//get pro

const getRtProjectByOwnerID = async (id,setChange) => {
    const q = query(collection(db, "projects"), where("owner_id", "==", id));
    onSnapshot(q, (querySnapshot) => {
      const projects = [];
      querySnapshot.forEach((doc) => {
        projects.push({ id: doc.id, ...doc.data() });
      });
      setChange((prev) => [...prev, ...projects]);
      console.log(projects);
    });
    
}

//get project by member id
const getRtProjectByMemberID = async (id,setChange) => {
    const q = query(collection(db, "projects"), where("members", "array-contains", {id:id}));
    onSnapshot(q, (querySnapshot) => {
      const projects = [];
      querySnapshot.forEach((doc) => {
        projects.push({ id: doc.id, ...doc.data() });
      });
      setChange((prev) => [...prev, ...projects]); // setChange(projects);
      console.log(projects);
    });
    
}

const getprojecByID = async (id) => {
  const docRef = doc(db, "projects", id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.log("No such document!");
    return {};
  }
}




export {addAllProjects,getRtProjectByOwnerID,getRtProjectByMemberID,getprojecByID};
