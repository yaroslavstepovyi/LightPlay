import React, { useContext } from "react";

import "./usersTable.css";

import { Dots } from "../../images";
import { UsersRoleModal } from "./UsersRoleModal";
import { usersContext } from "../../../contexts/usersList";
import { decryptUser } from "../../../utils/encryption-user";

export const UsersTable = () => {
  const loggedUser = decryptUser(localStorage.getItem("user"), "secret key");
  const isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));

  const {
    users,
    handleRoleSelect,
    activeUserId,
    setActiveUserId,
    activeUserName,
  } = useContext(usersContext);

  const handleUserClick = (user) => {
    if (!loggedUser) {
      return;
    }

    if (user.id === loggedUser.id) {
      return;
    }

    isLoggedIn && handleRoleSelect(user.id, user.name);
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
              {users.map((user) => (
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
