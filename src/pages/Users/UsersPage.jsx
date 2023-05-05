import React from 'react'

import { UsersTable } from '../../components/pages/users-table'
import { UsersPagination } from '../../components/pages/users-pagination'
import { DefaultLayout } from '../../layouts/DefaultLayout'
import { UsersFilter } from '../../components/pages/users-filter'
import { UsersListProvider } from '../../contexts/usersList'
import { UsersPaginationProvider } from '../../contexts/usersPagination'

const UsersPage = () => {
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
  )
}

export { UsersPage }
