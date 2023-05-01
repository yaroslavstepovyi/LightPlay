import React from "react";

import { UsersTable } from "../../components/pages/users-table";
import { UsersPagination } from "../../components/pages/users-pagination";
import { DefaultLayout } from "../../layouts/DefaultLayout";
import { UsersFilter } from "../../components/pages/users-filter";
import { UsersListProvider } from "../../contexts/users-list";
import { UsersPaginationProvider } from "../../contexts/users-pagination";

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
