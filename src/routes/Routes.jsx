import { createBrowserRouter } from "react-router-dom";
import AccordionContent from "../components/home/accordion/accordion-content/AccordionContent";
import AccordionSection from "../components/home/accordion/accordion-section/AccordionSection";

const router = createBrowserRouter([
    {
        path: '/',
        element: <AccordionSection></AccordionSection>
    }
])

export default router