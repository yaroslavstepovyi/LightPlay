import React from 'react'
import { UsersTable } from '../../components/pages/UsersTable'
import { UsersPagination } from '../../components/pages/UsersPagination'
import { DefaultLayout } from '../../layouts/DefaultLayout'

export const UsersPage = () => {
  return (
    <div>
      <div className="header__radius"></div>
        <DefaultLayout>
            <UsersTable />
            <UsersPagination />
        </DefaultLayout>
    </div>
  )
}

