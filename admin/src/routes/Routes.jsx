import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import CausesTableAdminSection from '../components/causes-table-admin/create-table-admin-section/CausesTableAdminSection'
import RootAdmin from '../pages/root-admin/RootAdmin'
import CausesFormAdmin from '../pages/causes-form-admin/CausesFormAdmin'
import EventsTableAdminPage from '../pages/events-table-page/EventsTableAdminPage'
import EventsFormPage from '../pages/events-form-page/EventsFormPage'

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootAdmin></RootAdmin>,
        children: [
            {
                path: '/causes-table',
                element: <CausesTableAdminSection></CausesTableAdminSection>
            },
            {
                path: '/causes-form',
                element: <CausesFormAdmin></CausesFormAdmin>
            },
            {
                path: '/events-table',
                element: <EventsTableAdminPage></EventsTableAdminPage>
            },
            {
                path: '/events-form',
                element: <EventsFormPage></EventsFormPage>
            }
        ]
    }
])

export default router
