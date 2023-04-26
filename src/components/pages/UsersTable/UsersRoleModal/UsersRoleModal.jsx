import React from "react";

import "./usersRoleModal.css";

const UsersRoleModal = ({
  loggedUserRole,
  loggedUserId,
  loggedUserName,
  activeUserId,
  activeUserName,
  setActiveUserId,
}) => {

  const roles = [
    {
      name: "admin",
      actions: [
        { label: "Send email", action: "Send email" },
        { label: "Change role", action: "Change role" },
        { label: "Block", action: "Block" },
        { label: "Delete", action: "Delete" },
      ],
    },
    {
      name: "moderator",
      actions: [
        { label: "Send email", action: "Send email" },
        { label: "Change role", action: "Change role" },
        { label: "Block", action: "Block" },
      ],
    },
    {
      name: "user",
      actions: [{ label: "Send email", action: "Send email" }],
    },
  ];

  function handleAction(action) {
    console.log(
      `${action} 
      FROM: id:"${loggedUserId}", user:"${loggedUserName}" 
      TO: id:"${activeUserId}", user:"${activeUserName}"`
    );
  }

  const currentRole = roles.find((role) => role.name === loggedUserRole);

  return (
    <ul className="role__lists">
      {currentRole.actions.map((action) => (
        <li
          className={`role__list role-${action.label.toLowerCase()}`}
          key={action.label}
        >
          <button
            onClick={() => {
              handleAction(action.label);
              setActiveUserId(null);
            }}
          >
            {action.label}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default UsersRoleModal;
