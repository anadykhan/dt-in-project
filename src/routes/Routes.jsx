import { createBrowserRouter } from "react-router-dom";
import AccordionContent from "../components/home/accordion/accordion-content/AccordionContent";

const router = createBrowserRouter([
    {
        path: '/',
        element: <AccordionContent></AccordionContent>
    }
])

export default router