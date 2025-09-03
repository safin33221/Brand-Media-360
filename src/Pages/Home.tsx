import AboutUs from "@/components/Modules/Home/AboutUs";
import { Hero } from "@/components/Modules/Home/Hero";
import MarqueeDemo from "@/components/Modules/Home/TrustedBy";

export default function Home() {
    return (
        <div className="space-y-20 max-md:mx-3 ">

            <Hero />
            <AboutUs />
            <MarqueeDemo/>
        </div>
    );
};
