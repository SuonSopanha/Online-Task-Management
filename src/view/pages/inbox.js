import React, { useState, useEffect, useContext } from "react";

import { auth } from "../../firebase/config";

import {
  getRtMessagesBySenderId,
  getRtMessagesByRecipientId,
} from "../../firebase/messageCRUD";

import { getRtNotifcationsByUserID } from "../../firebase/notification";
import LoadingBalls from "../../utils/loading";
import { sortDateAndTime } from "../../utils/sortDate";
import { modalContext } from "../part/test";

const Inbox = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [messages, setMessages] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [activity, setActivity] = useState([]);
  const [activeTab, setActiveTab] = useState("activity");
  const [sort, setSort] = useState(true);

  const handleSort = () => {
    setInterval(() => {
      setSort(!sort);
    }, 2000);

  };

  const { openMessageModal } = useContext(modalContext);
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        // User is signed in, you can update the component state or perform other actions.
        console.log("User is signed in:", user);

        getRtMessagesBySenderId(auth.currentUser.uid, setMessages)
        getRtMessagesByRecipientId(auth.currentUser.uid, setMessages)

        getRtNotifcationsByUserID(auth.currentUser.uid, setNotifications)
        

        getRtMessagesBySenderId(auth.currentUser.uid, setActivity);
        getRtMessagesByRecipientId(auth.currentUser.uid, setActivity);
        getRtNotifcationsByUserID(auth.currentUser.uid, setActivity);

        //sort activity by time and date
        setLoading(false);

      } else {
        // User is signed out.
        setError(true);
        console.log("User is signed out");
      }
    });

    return () => {
      // Unsubscribe the listener when the component unmounts
      unsubscribe();

    };
  }, []); // Empty dependency array to run the effect only once on component mount // Empty dependency array to run the effect only once on component mount // Empty dependency array to run the effect only once on component mount

  

  useEffect(() => {
    setMessages(sortDateAndTime(messages))

    setActivity(sortDateAndTime(activity))

    setNotifications(sortDateAndTime(notifications))

  }, [sort]);

  // Empty dependency array to run the effect only once on component mount // Empty dependency array to run the effect only once on component mount // Empty dependency array to run the effect only once on component mount

  if (loading) {
    return <LoadingBalls />;
  }

  return (
    
    <div className="w-full h-fit bg-glasses backdrop-blur-12 rounded-sm mt-[-30px] pb-4">
    {handleSort()}
      <div>
        <p className="text-2xl font-bold text-gray-500 ml-6 mt-4 pt-2">Inbox</p>
      </div>
      <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <div className="flex flex-row justify-between">
          <ul className="flex flex-wrap -mb-px">
            <li className="me-2">
              <a
                className={`inline-block p-3 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${
                  activeTab === "activity"
                    ? "text-blue-600 border-blue-600"
                    : ""
                }`}
                onClick={() => handleTabClick("activity")}
              >
                Activity
              </a>
            </li>
            <li className="me-2">
              <a
                className={`inline-block p-3 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${
                  activeTab === "notification"
                    ? "text-blue-600 border-blue-600"
                    : ""
                }`}
                onClick={() => handleTabClick("notification")}
                aria-current={activeTab === "notification" ? "page" : undefined}
              >
                Notification
              </a>
            </li>
            <li className="me-2">
              <a
                className={`inline-block p-3 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${
                  activeTab === "messages"
                    ? "text-blue-600 border-blue-600"
                    : ""
                }`}
                onClick={() => handleTabClick("messages")}
              >
                Messages
              </a>
            </li>
          </ul>
          <div className="flex items-center">
            <button
              onClick={openMessageModal}
              type="button"
              className="px-3 py-0 mr-3 h-8 text-white border-1 bg-blue-500 border-blue-600 rounded-lg"
            >
              SendMessage
            </button>
          </div>
        </div>
      </div>

      {/* Your inbox content goes here */}
      {activeTab === "activity" && (
        <div class="pt-1 pl-4">
          <ul class="space-y-1">
            {activity.map((activity) => (
              <li class="relative border-b border-gray-500 overflow-hidden">
                <div>
                  <a class="flex items-center w-full h-8 px-3 mt-1 rounded hover:bg-gray-300">
                    <svg
                      class="w-3 h-3 stroke-current"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                    <span class="ml-2 text-sm font-medium text-gray-700">
                      Group
                    </span>
                  </a>
                </div>
                <div class="text-sm font-medium text-gray-700 pl-3 py-1 whitespace-nowrap">
                  <p>Panha</p>
                  <p>
                    {activity.message_text
                      ? activity.message_text
                      : activity.notification_content}
                  </p>
                </div>

                <div className="flex justify-end text-xs font-medium text-gray-700 px-3 py-1 ">
                  <p>
                    {activity.time} -- {activity.date}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
      {activeTab === "messages" && (
        <div class="pt-1 pl-4">
          <ul class="space-y-1">
            {messages.map((messages) => (
              <li class="relative border-b border-gray-500 overflow-hidden">
                <div>
                  <a class="flex items-center w-full h-8 px-3 mt-1 rounded hover:bg-gray-300">
                    <svg
                      class="w-3 h-3 stroke-current"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                    <span class="ml-2 text-sm font-medium text-gray-700">
                      Group
                    </span>
                  </a>
                </div>
                <div class="text-sm font-medium text-gray-700 pl-3 py-1 whitespace-nowrap">
                  <p>Panha</p>
                  <p>{messages.message_text}</p>
                </div>

                <div className="flex justify-end text-xs font-medium text-gray-700 px-3 py-1 ">
                  <p>
                    {messages.time} -- {messages.date}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
      {activeTab === "notification" && (
        <div class="pt-1 pl-4">
          <ul class="space-y-1">
            {notifications.map((notifications) => (
              <li class="relative border-b border-gray-500 overflow-hidden">
                <div>
                  <a class="flex items-center w-full h-8 px-3 mt-1 rounded hover:bg-gray-300">
                    <svg
                      class="w-3 h-3 stroke-current"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                    <span class="ml-2 text-sm font-medium text-gray-700">
                      Group
                    </span>
                  </a>
                </div>
                <div class="text-sm font-medium text-gray-700 pl-3 py-1 whitespace-nowrap">
                  <p>{notifications.notification_type}</p>
                  <p>{notifications.notification_content}</p>
                </div>

                <div className="flex justify-end text-xs font-medium text-gray-700 px-3 py-1 ">
                  <p>
                    {notifications.time} -- {notifications.date}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Inbox;
