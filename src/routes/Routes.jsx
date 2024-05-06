import { createBrowserRouter } from "react-router-dom";
import CausesCard from "../components/causes/CausesCard";

const router = createBrowserRouter([
    {
        path: '/',
        element: <CausesCard></CausesCard>
    }
])

export default router