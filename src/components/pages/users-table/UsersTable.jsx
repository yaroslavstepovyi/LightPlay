import React, { useContext } from "react";

import "./users-table.css";

import { Dots } from "../../images";
import { UsersRoleModal } from "./users-role-modal";
import { usersContext } from "../../../contexts/users-list";
import { decryptUser } from "../../../utils/encryption-user";
import { UsersPaginationContext } from "../../../contexts/users-pagination";

export const UsersTable = () => {
  const { getPaginatedUsers } = useContext(UsersPaginationContext)
  const loggedUser = decryptUser(localStorage.getItem("user"), "secret key");

  const {
    handleRoleSelect,
    activeUserId,
    setActiveUserId,
    activeUserName,
  } = useContext(usersContext);

  const handleUserClick = (user) => {
    const updatedUser = decryptUser(
    localStorage
    .getItem("user"), "secret key"
    );

    if (!updatedUser) {
      return;
    }

    if (user.id === updatedUser.id) {
      return;
    }

    handleRoleSelect(user.id, user.name);
  };

  return (
    <section className="users">
      <div className="users__datas">
        <div className="users__datas-wrap">
          <table className="users__datas-table">
            <tbody>
              <tr>
                <th>Avatar</th>
                <th>Name</th>
                <th>Country</th>
                <th>Age</th>
                <th>Email</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </tbody>
            <tbody>
              {getPaginatedUsers().map((user) => (
                <tr key={user.id}>
                  <td>
                    <img
                      className="users__datas-user-img"
                      src={user.img}
                      alt={user.name}
                    />
                  </td>
                  <td>{user.name}</td>
                  <td>{user.country}</td>
                  <td>{user.age}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td className="users__datas-user-action">
                    <button
                      className="users__btn-dots"
                      type="button"
                      onClick={() => handleUserClick(user)}
                    >
                      <img
                        className="users__datas-dots"
                        src={Dots}
                        alt="Dots"
                      />
                    </button>
                    {activeUserId === user.id && (
                      <>
                        <UsersRoleModal
                          loggedUserRole={loggedUser.role}
                          loggedUserId={loggedUser.id}
                          loggedUserName={loggedUser.name}
                          activeUserId={activeUserId}
                          activeUserName={activeUserName}
                          setActiveUserId={setActiveUserId}
                        />
                        <div
                          className="background-blur-transparent"
                          onClick={() => setActiveUserId(null)}
                        ></div>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
