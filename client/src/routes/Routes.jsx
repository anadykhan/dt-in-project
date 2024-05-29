import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/root/Root";
import HomePage from "../pages/home-page/HomePage";

import CausesListPage from "../pages/causes-list/CausesListPage";
import SinglePostPage from "../pages/single-post-page/single-post-section/SinglePostPage";
import CauseDetailPage from "../pages/cause-detail/CauseDetailPage";
import EventDetailPage from "../pages/event-detail-page/EventDetailPage";
import SignInContent from "../components/sign-in/sign-in-content/SignInContent";
import SignInPage from "../pages/sign-in-page/SignInPage";
import RegistrationPage from "../pages/registration-page/RegistrationPage";
import EventsListPage from "../pages/events-list-page/EventsListPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <HomePage></HomePage>
            },
            {
                path: '/single-post',
                element: <SinglePostPage></SinglePostPage>
            },
            {
                path: '/causes-list',
                element: <CausesListPage></CausesListPage>
            },
            {
                path: '/events-list',
                element: <EventsListPage></EventsListPage>
            },
            {
                path: '/cause-detail',
                element: <CauseDetailPage></CauseDetailPage>
            },
            {
                path: '/event-detail/:id',
                element: <EventDetailPage></EventDetailPage>
            },
            {
                path: '/sign-in',
                element: <SignInPage></SignInPage>
            },
            {
                path: '/registration',
                element: <RegistrationPage></RegistrationPage>
            }
        ]
    }
])

export default router