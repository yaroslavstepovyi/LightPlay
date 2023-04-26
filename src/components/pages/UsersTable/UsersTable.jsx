import React, { useContext } from "react";

import "./usersTable.css";

import { Dots } from "../../images";
import { UsersRoleModal } from "./UsersRoleModal";
import { usersContext } from "../../../contexts/usersList";
import { decryptUser } from "../../../utils/encryption-user";

export const UsersTable = () => {
  const loggedUser = decryptUser(localStorage.getItem("user"), "secret key");
  const { users, handleRoleSelect, activeUserId, setActiveUserId } =
    useContext(usersContext);

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
                      data-id={user.id}
                      data-name={user.name}
                      onClick={() => handleRoleSelect(user.id)}
                    >
                      <img
                        className="users__datas-dots"
                        src={Dots}
                        alt="dots"
                      />
                    </button>
                    {activeUserId === user.id && (
                      <>
                        <UsersRoleModal userRole={loggedUser.role} />
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
