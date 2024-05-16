import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import CausesTableAdminSection from '../components/causes-table-admin/create-table-admin-section/CausesTableAdminSection'
import RootAdmin from '../pages/root-admin/RootAdmin'
import CausesFormAdmin from '../pages/causes-form-admin/CausesFormAdmin'

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootAdmin></RootAdmin>,
        children: [
            {
                path: '/',
                element: <CausesTableAdminSection></CausesTableAdminSection>
            },
            {
                path: '/causes-form',
                element: <CausesFormAdmin></CausesFormAdmin>
            }
        ]
    }
])

export default router
