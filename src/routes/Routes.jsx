import { createBrowserRouter } from "react-router-dom";
import ComponentDisplay from "../components/display/ComponentDisplay";

const router = createBrowserRouter([
    {
        path: '/',
        element: <ComponentDisplay></ComponentDisplay>
    }
])

export default router