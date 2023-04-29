import React from "react";

import { UsersTable } from "../../components/pages/UsersTable";
import { UsersPagination } from "../../components/pages/UsersPagination";
import { DefaultLayout } from "../../layouts/DefaultLayout";
import { UsersFilter } from "../../components/pages/UsersFilter/UsersFilter";
import { UsersListProvider } from "../../contexts/usersList";
import { UsersPaginationProvider } from "../../contexts/usersPagination";

export const UsersPage = () => {
  return (
    <>
      <DefaultLayout>
        <UsersListProvider>
          <UsersPaginationProvider>
            <UsersFilter />
            <UsersTable />
            <UsersPagination />
          </UsersPaginationProvider>
        </UsersListProvider>
      </DefaultLayout>
    </>
  );
};
