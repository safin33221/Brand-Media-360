import SectionTitle from "@/components/Shared/SectionTitle";

const AboutUs = () => {
    return (

        <div className=" ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8  rounded-lg ">


                {/* Work Demo Section */}
                <div className=" p-6 rounded-md flex justify-center items-center bg-background  border h-full">
                    {/* <TrustedBy /> */}
                </div>
                {/* About Us Section */}
                <div className=" p-6 rounded-md flex flex-col justify-center">
                    <SectionTitle title="About us" align="left" />
                    <p className=" leading-relaxed">
                        BrandMedia 360 is a full-service digital agency dedicated to helping businesses grow and stand out in the modern marketplace. We specialize in digital marketing, branding design, photography, and video production, offering end-to-end solutions that transform ideas into impactful brand experiences. With a creative approach and strategic mindset, we work to make your brand more visible, engaging, and memorable
                    </p>
                </div>


            </div>
        </div>

    );
};

export default AboutUs;
