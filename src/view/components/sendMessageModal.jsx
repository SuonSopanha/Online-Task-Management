// src/Modal.js
import React from "react";
import { useState, useEffect } from "react";

import { FaUsers } from "react-icons/fa";

import { getUserByEmail, getUserByID } from "../../firebase/usersCRUD";
import { auth } from "../../firebase/config";
import { addMessage } from "../../firebase/messageCRUD";
const SendMessageModal = ({ isOpen, onClose }) => {
  const [message, setMessage] = useState("");
  const [reciever, setReciever] = useState("");

  const currentDate = new Date();

  // Get the current time in 12-hour format with AM/PM
  const currentTime = currentDate.toLocaleTimeString("en-KH", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  // Get the current date in MM/DD/YYYY format
  const currentDateFormatted = currentDate.toLocaleDateString("en-KH", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });

  const handleSendMessage = async () => {
    try {

      console.log("Message:", message);
      console.log("Reciever:", reciever);

      const recipient = await getUserByEmail(reciever).then((user) => user).catch((error) =>{alert("No User With this email")});

      if (recipient !== null) {
        console.log("Recipient:", recipient);
        const recieverID = recipient.id;

        const newMessage = {
          sender_id: auth.currentUser.uid,
          recipient_id: recieverID,
          message_text: message,
          time: currentTime,
          date: currentDateFormatted,
        };

        await addMessage(newMessage);
        alert("Message Sent");
      } else {
        alert("No User With this email");
      }

      handleClose();
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };


  const handleClose = () => {
    // Close the modal without sending the message
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-10 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-blue-200 backdrop-blur-12 bg-opacity-50 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">Send Message</h2>
            <div className="flex flex-row justify-start items-center space-x-3">
              <div className="py-2">To :</div>
              <span class="flex flex-row items-center px-2 py-1 font-semibold leading-tight text-blue-400 bg-blue-200 border border-purple-900 rounded-xl">
                <FaUsers className="mr-2" />
                <input
                  type="text"
                  value={reciever}
                  className="border-2 border-blue-400"
                  onChange={(e) => setReciever(e.target.value)}
                ></input>
              </span>
            </div>

            <textarea
              rows="4"
              cols="50"
              placeholder="Type your message here..."
              className="w-full p-2 mb-4 border bg-blue-200 backdrop-blue-12 bg-opacity-25 rounded"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <div className="flex justify-end">
              <button
                type="button"
                onClick={handleClose}
                className="px-3 py-2 mr-3 gap-x-1.5 rounded-md text-white bg-blue-500 bg-opacity-80  hover:bg-blue-600 flex items-center text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300"
              >
                <div>Discard</div>
              </button>
              <button
                type="button"
                onClick={handleSendMessage}
                className="px-3 py-2 mr-3 gap-x-1.5 rounded-md text-white bg-blue-500 bg-opacity-80  hover:bg-blue-600 flex items-center text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300"
              >
                <div>Send</div>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SendMessageModal;
