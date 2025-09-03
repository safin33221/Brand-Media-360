import App from "@/App";
import About from "@/Pages/About";
import ContactUs from "@/Pages/ContactUs";
import Home from "@/Pages/Home";
import BrandingDesign from "@/Pages/Services/BrandingDesign";
import DigitalMarketing from "@/Pages/Services/DigitalMarketing";
import PhotoAndVideoGrapy from "@/Pages/Services/PhotoAndVideoGrapy";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
    {
        Component: App,
        path: "/",
        children: [
            {
                Component: Home,
                index: true
            },
            {
                Component: About,
                path: "/about"
            },
            {
                Component: BrandingDesign,
                path: "/branding-design"
            },
            {
                Component: DigitalMarketing,
                path: "/digital-marketing"
            },
            {
                Component: PhotoAndVideoGrapy,
                path: "/photo-and-video-grapy"
            },
            {
                Component: ContactUs,
                path: "/contact-us"
            },
        ]
    }
])