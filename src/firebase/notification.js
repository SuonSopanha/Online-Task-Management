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

var data = [
    
        {"user_id":"7b68ad23-f1f0-4a88-9d13-4c843b33f468","notification_type":"task_due","time":"2:24 AM","Date":"11/29/2023","source":{"type":2,"id":"8ca625b8-cf45-4f0d-bc6b-27611c014234"},"notification_content":"Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum."},
        {"user_id":"a63f3634-f900-42de-be39-501b6d6a828c","notification_type":"task_assigned","time":"5:41 PM","Date":"11/29/2023","source":{"type":3,"id":"e4d5eb5e-2494-4d9f-8e3c-c8ffffb24c93"},"notification_content":"Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo."},
        {"user_id":"b384705e-6179-4bba-83ce-cb0a133422f2","notification_type":"task_due","time":"4:15 AM","Date":"11/29/2023","source":{"type":3,"id":"c732ca6e-11b7-4f4f-9269-dfdbea4de5a7"},"notification_content":"Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum."},
        {"user_id":"534241cd-ec47-4972-b075-10c31de5a5a1","notification_type":"task_due","time":"12:30 PM","Date":"11/29/2023","source":{"type":1,"id":"0ce56724-40df-4226-b910-09421a5b5f65"},"notification_content":"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est."},
        {"user_id":"51263464-f0f8-4feb-a563-a78f61aaab9f","notification_type":"task_completed","time":"8:32 PM","Date":"11/29/2023","source":{"type":1,"id":"27fd83cd-8bae-487f-9475-eec251b5f1b7"},"notification_content":"Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."},
        {"user_id":"0382e87d-9e33-45e0-bf3b-24fb080e3e79","notification_type":"task_completed","time":"7:47 AM","Date":"11/29/2023","source":{"type":3,"id":"f10b0998-3da6-4e69-8227-03357479474c"},"notification_content":"Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum."},
        {"user_id":"40e83140-fa7a-4284-b3c9-cb94e3c72008","notification_type":"task_completed","time":"9:25 AM","Date":"11/29/2023","source":{"type":1,"id":"e976e1c3-e5a8-4e86-acfb-775ec407ff3f"},"notification_content":"Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem."},
        {"user_id":"603e91e6-af2b-4c01-afe1-eaacf16ef126","notification_type":"task_due","time":"9:15 PM","Date":"11/29/2023","source":{"type":3,"id":"0b885952-6e39-44b8-ad98-466f463b5a49"},"notification_content":"Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat."},
        {"user_id":"aee2c1d2-4906-4853-86a2-18755cfe7e76","notification_type":"task_due","time":"8:38 AM","Date":"11/29/2023","source":{"type":3,"id":"1cb31f9c-6011-47d9-8f37-fab09cb1a77e"},"notification_content":"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris."},
        {"user_id":"ffbd4975-3ba1-4dc6-8904-5a85940d9def","notification_type":"task_due","time":"8:55 PM","Date":"11/29/2023","source":{"type":3,"id":"a16caf13-e77c-46dd-82ac-33fea9db41ec"},"notification_content":"Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum."}
        
]

const addAllNotification = async () => {
  try {
    // Reference to the projects collection
    const notification_collection = collection(db, "notifications");

    // Loop through each project and add it to Firestore
    for (const notification of data) {
      // Add project data to Firestore
      const docRef = await addDoc(notification_collection, notification);
      console.log("Document written with ID: ", docRef.id);
    }

    console.log("All documents added successfully.");
  } catch (error) {
    console.error("Error adding documents: ", error);
  }
};

const getRtNotifcationsByUserID = async (id,setChange) => {
    const q = query(collection(db, "notifications"), where("user_id", "==", id));
    onSnapshot(q, (querySnapshot) => {
      const notifcations = [];
      querySnapshot.forEach((doc) => {
        notifcations.push({ id: doc.id, ...doc.data() });
      });
      setChange((prev) => [...prev, ...notifcations]);
      console.log(notifcations);
    });
}

export { addAllNotification, getRtNotifcationsByUserID };
