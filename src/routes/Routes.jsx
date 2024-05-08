import { createBrowserRouter } from "react-router-dom";
import AccordionContent from "../components/home/accordion/accordion-content/AccordionContent";
import AccordionSection from "../components/home/accordion/accordion-section/AccordionSection";
import Root from "../pages/root/Root";
import HomePage from "../pages/home-page/HomePage";
import SinglePostBanner from "../components/single-post/single-post-banner/SinglePostBanner";
import SinglePostSection from "../components/single-post/single-post-section/SinglePostSection";

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
                element: <SinglePostSection></SinglePostSection>
            }
        ]
    }
])

export default router