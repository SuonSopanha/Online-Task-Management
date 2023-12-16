// src/Modal.js
import React from "react";
import { useState, useEffect } from "react";

import { FaUsers } from "react-icons/fa";

const SendMessageModal = ({ isOpen, onClose }) => {
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    // Perform any logic you need with the message, e.g., send it to a server
    console.log("Message sent:", message);

    // Close the modal
    onClose();
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
              <span class="flex flex-row items-center px-2 py-1 font-semibold leading-tight text-purple-400 bg-purple-200 border border-purple-900 rounded-xl">
                <FaUsers className="mr-2" />
                Acceptable
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
