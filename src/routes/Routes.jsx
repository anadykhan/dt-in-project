import { createBrowserRouter } from "react-router-dom";
import AccordionCard from "../components/home/accordion-card/AccordionCard";

const router = createBrowserRouter([
    {
        path: '/',
        element: <AccordionCard></AccordionCard>
    }
])

export default router