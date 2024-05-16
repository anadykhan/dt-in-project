import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Root from '../pages/root/Root'

const rotuer = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>
    }
])

export default rotuer
