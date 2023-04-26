import React from "react";

import "./usersRoleModal.css";

const UsersRoleModal = ({ userRole }) => {
  return (
    <ul className="role__lists">
      {userRole === "admin" && (
        <>
          <li className="role__list role-send-email">
            <button>Send email</button>
          </li>
          <li className="role__list role-change-role">
            <button>Change Role</button>
          </li>
          <li className="role__list role-block">
            <button>Block</button>
          </li>
          <li className="role__list role-delete">
            <button>Delete</button>
          </li>
        </>
      )}
      {userRole === "moderator" && (
        <>
          <li className="role__list role-send-email">
            <button>Send email</button>
          </li>
          <li className="role__list role-change-role">
            <button>Change Role</button>
          </li>
          <li className="role__list role-block">
            <button>Block</button>
          </li>
        </>
      )}
      {userRole === "user" && (
        <li className="role__list role-send-email">
          <button>Send email</button>
        </li>
      )}
    </ul>
  );
};

export default UsersRoleModal;
