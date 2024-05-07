import { createBrowserRouter } from "react-router-dom";
import UpcomingEventContent from "../components/home/upcoming-event/upcoming-event-content/UpcomingEventContent";
import UpcomingEventSection from "../components/home/upcoming-event/upcoming-event-section/UpcomingEventSection";

const router = createBrowserRouter([
    {
        path: '/',
        element: <UpcomingEventSection></UpcomingEventSection>
    }
])

export default router