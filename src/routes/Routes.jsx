import { createBrowserRouter } from "react-router-dom";
import CategorySection from "../components/home/category-section/CategorySection";

const router = createBrowserRouter([
    {
        path: '/',
        element: <CategorySection></CategorySection>
    }
])

export default router