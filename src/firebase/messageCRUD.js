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

var data = [
    
    {"sender_id":"708c180d-f619-47cf-9ede-d72ad22f809b","recipient_id":"e1531a38-f819-4003-9891-67ef9fb7f68a","message_text":"Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.","time":"6:43 AM","date":"02/20/2023"},
    {"sender_id":"caf22497-61b7-4407-923e-dbee9549b24a","recipient_id":"906a1999-900c-47dd-b48e-1e8517bbbc0e","message_text":"Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.","time":"9:02 PM","date":"02/20/2023"},
    {"sender_id":"b6830fb9-dad1-4c90-a207-f80a4c92d562","recipient_id":"853c02f8-6af5-44c5-a77a-1251884d4226","message_text":"Duis aliquam convallis nunc.","time":"9:01 PM","date":"02/20/2023"},
    {"sender_id":"35bf7968-798f-4d7c-b5de-cecc1a9ed6d5","recipient_id":"0bdf14d0-7a4c-44e2-ad54-f3d31f7eed1e","message_text":"Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.","time":"2:37 PM","date":"02/20/2023"},
    {"sender_id":"05939225-0dc2-499a-8605-43eaaca072bf","recipient_id":"18f3e0b5-439c-40f9-aa42-668627539bce","message_text":"Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.","time":"3:43 AM","date":"02/20/2023"},
    {"sender_id":"1efd07e8-92ff-4d1b-a1fc-bbc2ebccdc81","recipient_id":"204e7ff3-f80c-4a36-9bbb-52f025a16452","message_text":"Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.","time":"2:02 PM","date":"02/20/2023"},
    {"sender_id":"9d65b01a-8bcb-45db-bb65-cdc10fbdacf2","recipient_id":"3267b001-2b7e-4b48-b19b-d5f8fa4822ca","message_text":"Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.","time":"11:03 PM","date":"02/20/2023"},
    {"sender_id":"9a988acc-6bd2-4e6c-820d-233adad723cc","recipient_id":"73503a63-5d7b-4c38-a0ec-a7f73416853a","message_text":"Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.","time":"2:03 PM","date":"02/20/2023"},
    {"sender_id":"28cc029e-8e15-4171-b5f3-cb9cf77c0b2a","recipient_id":"9c1853c3-1174-47e8-9dc5-46a8a093a5dc","message_text":"Phasellus sit amet erat.","time":"7:31 AM","date":"02/20/2023"},
    {"sender_id":"3911289c-b5b8-4074-bc80-1963d62b8a64","recipient_id":"ac07c392-b436-457e-9587-fa828f51b830","message_text":"Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.","time":"5:42 AM","date":"02/20/2023"}
        
]

const addAllMessages = async () => {
    try {
      // Reference to the projects collection
      const message_collection = collection(db, "messages");
  
      // Loop through each project and add it to Firestore
      for (const message of data) {
        // Add project data to Firestore
        const docRef = await addDoc(message_collection, message);
        console.log("Document written with ID: ", docRef.id);
      }
  
      console.log("All documents added successfully.");
    } catch (error) {
      console.error("Error adding documents: ", error);
    }
};

//getRtMessagesBySenderId
const getRtMessagesBySenderId = async (id,setChange) => {
    const q = query(collection(db, "messages"), where("sender_id", "==", id));
    onSnapshot(q, (querySnapshot) => {
      const messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ id: doc.id, ...doc.data() });
      });
      setChange((prev) => [...prev, ...messages]);
      console.log(messages);
    });
}

const getRtMessagesByRecipientId = async (id,setChange) => {
    console.log(id)
    const q = query(collection(db, "messages"), where("recipient_id", "==", id));
    onSnapshot(q, (querySnapshot) => {
      const messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ id: doc.id, ...doc.data() });
      });
      setChange((prev) => [...prev, ...messages]);
      console.log(messages)
    });
}

const addMessage = async (message) => {
  try {
    const messageCollection = collection(db, "messages");

    // Use addDoc to add a new document to the "messages" collection
    const docRef = await addDoc(messageCollection, message);

    console.log("Document written with ID: ", docRef.id);
    console.log("Message added successfully.");
  } catch (error) {
    console.error("Error adding message: ", error);
  }
};


export {addAllMessages,getRtMessagesBySenderId,getRtMessagesByRecipientId,addMessage};