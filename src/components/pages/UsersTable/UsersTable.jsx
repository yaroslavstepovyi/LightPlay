import React, { useContext } from "react";

import "./usersTable.css";

import { Dots } from "../../images";
import { usersContext } from "../../../contexts/usersList";

export const UsersTable = () => {
  const { users } = useContext(usersContext);

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
                      type="button"
                      className="users__btn-dots"
                      data-id={user.id}
                      data-name={user.name}
                    >
                      <img
                        className="users__datas-dots"
                        src={Dots}
                        alt="dots"
                      />
                    </button>
                    <div className="role hidden">
                      <ul className="role__lists">
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
                      </ul>
                    </div>
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
