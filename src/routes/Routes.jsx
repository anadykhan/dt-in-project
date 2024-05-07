import { createBrowserRouter } from "react-router-dom";
import CauseSection from "../components/home/cause-section/CauseSection";

const router = createBrowserRouter([
    {
        path: '/',
        element: <CauseSection></CauseSection>
    }
])

export default router