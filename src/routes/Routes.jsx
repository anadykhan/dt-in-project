import { createBrowserRouter } from "react-router-dom";
import AccordionCard from "../components/home/accordion-card/AccordionCard";
import Banner from "../components/home/banner/Banner";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Banner></Banner>
    }
])

export default router