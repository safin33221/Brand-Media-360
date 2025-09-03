import SectionTitle from "@/components/Shared/SectionTitle";

const AboutUs = () => {
    return (
        <section className=" py-5 ">
            <div className="container mx-auto ">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8  p-6 rounded-lg ">


                    {/* Work Demo Section */}
                    <div className=" p-6 rounded-md flex justify-center items-center bg-background  border h-full">
                        {/* <TrustedBy /> */}
                    </div>
                    {/* About Us Section */}
                    <div className=" p-6 rounded-md flex flex-col justify-center">
                        <SectionTitle title="About us" align="left" />
                        <p className="text-gray-700 leading-relaxed">
                            We are a passionate team dedicated to building modern web
                            solutions. Our mission is to deliver high-quality applications
                            with great user experience.
                        </p>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default AboutUs;
