import React from "react";
import { Route, Routes } from "react-router-dom";

import "./app.css";

import { HomePage } from "../home";
import { GamesPage } from "../games";
import { UsersPage } from "../users";
import { ErrorBoundary } from "../../hoc-helpers";
import { AuthProvider } from "../../contexts/auth-user";

export const App = () => {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <section className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/games" element={<GamesPage />} />
            <Route path="/users" element={<UsersPage />} />
          </Routes>
        </section>
      </AuthProvider>
    </ErrorBoundary>
  );
};
