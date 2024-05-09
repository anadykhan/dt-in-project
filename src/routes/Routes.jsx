import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/root/Root";
import HomePage from "../pages/home-page/HomePage";

import CausesListPage from "../pages/causes-list/CausesListPage";
import SinglePostPage from "../pages/single-post-page/single-post-section/SinglePostPage";
import CauseDetailPage from "../pages/cause-detail/CauseDetailPage";

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
                path: '/cause-detail',
                element: <CauseDetailPage></CauseDetailPage>
            }
        ]
    }
])

export default router