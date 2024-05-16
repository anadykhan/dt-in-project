import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import CausesTableAdminSection from '../pages/components/causes-table-admin/create-table-admin-section/CausesTableAdminSection'
import RootAdmin from '../pages/root-admin/RootAdmin'

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootAdmin></RootAdmin>,
        children: [
            {
                path: '/',
                element: <CausesTableAdminSection></CausesTableAdminSection>
            },
        ]
    }
])

export default router
