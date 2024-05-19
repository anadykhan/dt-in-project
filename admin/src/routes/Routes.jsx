import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import RootAdmin from '../pages/root-admin/RootAdmin'
import CausesEditAdmin from '../pages/causes-edit-admin/CausesEditAdmin'
import EventsFormPageAdmin from '../pages/events-form-page-admin/EventsFormPageAdmin'
import EventsTablePageAdmin from '../pages/events-table-page-admin/EventsTablePageAdmin'
import CausesFormPageAdmin from '../pages/causes-form-page-admin/CausesFormPageAdmin'
import CausesTablePageAdmin from '../pages/causes-table-page-admin/CausesTablePageAdmin'
import EventsEditPageAdmin from '../pages/events-edit-page-admin/EventsEditPageAdmin'


const router = createBrowserRouter([
    {
        path: '/',
        element: <RootAdmin></RootAdmin>,
        children: [
            {
                path: '/causes-table',
                element: <CausesTablePageAdmin></CausesTablePageAdmin>
            },
            {
                path: '/causes-form',
                element: <CausesFormPageAdmin></CausesFormPageAdmin>
            },
            {
                path: '/events-table',
                element: <EventsTablePageAdmin></EventsTablePageAdmin>
            },
            {
                path: '/events-form',
                element: <EventsFormPageAdmin></EventsFormPageAdmin>
            },
            {
                path: '/causes-edit/:id',
                element: <CausesEditAdmin></CausesEditAdmin>
            },
            {
                path: '/events-edit/:id',
                element: <EventsEditPageAdmin></EventsEditPageAdmin>
            }
        ]
    }
])

export default router
