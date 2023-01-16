import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GamesPage } from "../pages/Games/GamesPage"
import { UsersPage } from "../pages/Users/UsersPage";
import { HomePage } from "../pages/Home/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "games",
    element: <GamesPage />,
  },
  {
    path: "users",
    element: <UsersPage />,
  },
]);

export const Router = () => {
  return (
    <div>
        <RouterProvider router={router} />
    </div>
  )
}
