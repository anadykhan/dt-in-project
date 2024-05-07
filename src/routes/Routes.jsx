import { createBrowserRouter } from "react-router-dom";
import UpcomingEventContent from "../components/home/upcoming-event/UpcomingEventContent";

const router = createBrowserRouter([
    {
        path: '/',
        element: <UpcomingEventContent></UpcomingEventContent>
    }
])

export default router