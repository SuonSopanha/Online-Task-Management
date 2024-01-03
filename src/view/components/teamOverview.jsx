import React from "react";
import { useState, useEffect } from "react";

import EditableBox from "./editableBox";
import { getUserByID } from "../../firebase/usersCRUD";
import { getprojecByID } from "../../firebase/projectCRUD";
import UserProfilePic from "../../utils/photoGenerator";
import { FaClipboardList } from "react-icons/fa";

const TeamOverview = ({ team }) => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [teamDesciption, setTeamDescription] = useState(team.description);
  const [teamMilestone, setTeamMilestone] = useState(team.milestone);
  const [teamName, setTeamName] = useState(team.name);
  const [teamProjects, setTeamProjects] = useState(team.projects);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      if (!team.members || team.members.length === 0) {
        // Team members is undefined or an empty array, handle accordingly
        console.warn("Team members are undefined or empty.");
        return;
      }

      const teamMemberUserIds = team.members.map((member) => member.user_id);

      console.log(teamMemberUserIds);

      try {
        const memberPromises = teamMemberUserIds.map(async (userId) => {
          const user = await getUserByID(userId);
          if (user) {
            // Include the 'role' field from the corresponding team member
            const teamMember = team.members.find(
              (member) => member.user_id === userId
            );
            if (teamMember && teamMember.role) {
              user.role = teamMember.role;
            }
            return user;
          }
          return null;
        });

        const teamMembers = await Promise.all(memberPromises);

        setTeamMembers(teamMembers);
      } catch (error) {
        // Handle errors if needed
        console.error("Error fetching team members:", error);
      }
    };

    const fetchProjects = async () => {
      if (!team.projects || team.projects.length === 0) {
        // Team projects is undefined or an empty array, handle accordingly
        console.warn("Team projects are undefined or empty.");
        return;
      }

      const teamProjectsIDs = team.projects.map(
        (project) => project.project_id
      );

      console.log(teamProjectsIDs);

      try {
        const projectPromises = teamProjectsIDs.map(async (projectId) => {
          const project = await getprojecByID(projectId);
          return project;
        });

        const teamProjects = await Promise.all(projectPromises);

        setTeamProjects(teamProjects);
      } catch (error) {
        // Handle errors if needed
        console.error("Error fetching team projects:", error);
      }
    };

    fetchProjects();
    fetchTeamMembers();
  }, [team]);

  return (
    <>
      <div class="container mx-auto flex flex-col lg:flex-row lg:space-x-4 mt-3">
        <div class="w-full lg:w-8/12 flex flex-col">
          <div className="w-full h-fit  bg-glasses backdrop-blur-12 px-4 py-2 space-y-5 rounded-xl mb-4">
            <h1 className="text-2xl font-semibold text-gray-700 pt-2">
              Member
            </h1>

            <div className="grid gap-10 row-gap-8 mx-auto sm:row-gap-10 lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-3 pb-2">
              {teamMembers.map((member, index) =>
                member !== null ? (
                  <div className="flex items-center" key={index}>
                    {member.photo_URL !== null ? (
                      <img
                        className="object-cover w-12 h-12 mr-4 rounded-full shadow"
                        src={member.photo_URL}
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
            </div>
          </div>

          <div className="w-full h-fit bg-glasses backdrop-blur-12 px-4 py-2 space-y-5 rounded-xl mb-4">
            <h1 className="text-2xl font-semibold text-gray-700 pt-2">
              Project
            </h1>

            <ul className="flex flex-col space-y-4 ">
              <li>
                <div class="flex items-center text-sm border-b border-gray-900 px-1 pb-2">
                  <div class="relative w-10 h-10 mr-3 rounded-full md:block">
                    <img
                      class="object-cover w-full h-full rounded-lg"
                      src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                      alt=""
                      loading="lazy"
                    />
                    <div
                      class="absolute inset-0 rounded-full shadow-inner"
                      aria-hidden="true"
                    ></div>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-700 ">Add Project</p>
                  </div>
                </div>
              </li>

              {teamProjects &&
                teamProjects.map((project) => (
                  <li className="flex flex-row justify-between border-b border-gray-700 w-full items-center">
                    <div class="flex items-center text-sm  px-1 pb-2">
                      <div class="relative w-10 h-10 mr-3 rounded-full md:block">
                        <button className="object-cover w-full h-full rounded-lg flex flex-row items-center justify-center bg-sky-300">
                          <FaClipboardList className="text-white w-6 h-6" />
                        </button>
                        <div
                          class="absolute inset-0 rounded-full shadow-inner"
                          aria-hidden="true"
                        ></div>
                      </div>
                      <div>
                        <p class="font-semibold text-gray-700">
                          {project.project_name}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
        {console.log(teamProjects)}
        <div class="w-full lg:w-4/12 flex flex-col mt-0 mb-2 lg:mt-0">
          <div className="w-full bg-glasses backdrop-blur-12 p-4 rounded-xl text-gray-700 mb-4">
            <div className="text-2xl font-bold">About Us</div>

            <div className="p-2">
              <EditableBox init={teamDesciption} OnChange={() => {}} />
            </div>
          </div>

          <div class="flex flex-col  bg-glasses backdrop-blur-12 p-4 rounded-xl text-gray-700 w-full h-fit ">
            <div>
              <span class="text-xs">{team.name}</span>
            </div>
            <div>
              {team && team.milestones && team.milestones.length > 0 && (
                <p className="text-xl font-bold my-1">
                  {team.milestones[0].milestone_name}
                </p>
              )}
            </div>

            <div>
              <p class="text-xs">How to be cool and Make them good</p>
              <div class="px-2 py-1 text-xs my-1 font-semibold leading-tight w-fit text-green-700 bg-green-100 rounded-lg">
                Acceptable
              </div>
            </div>

            <div class="text-xs mb-2">5/12 Task Completed</div>
            <div class="w-full bg-gray-400 p-0">
              <div class="w-[50%] bg-blue-500 h-1"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamOverview;
