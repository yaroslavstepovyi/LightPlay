import React from "react";
import { UsersTable } from "../../components/pages/UsersTable";
import { UsersPagination } from "../../components/pages/UsersPagination";
import { DefaultLayout } from "../../layouts/DefaultLayout";

export const UsersPage = () => {
  return (
    <>
      <DefaultLayout>
        <UsersTable />
        <UsersPagination />
      </DefaultLayout>
    </>
  );
};
