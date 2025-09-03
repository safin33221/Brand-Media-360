
const AboutUs = () => {
    return (
        <section className=" py-5 min-h-96">
            <div className="container mx-auto ">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8  p-6 rounded-lg ">


                    {/* Work Demo Section */}
                    <div className=" p-6 rounded-md flex justify-center items-center bg-background  border h-full">
                        {/* <TrustedBy /> */}
                    </div>
                    {/* About Us Section */}
                    <div className=" p-6 rounded-md flex flex-col justify-center">
                        <h2 className="text-2xl font-bold mb-4">About Us</h2>
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
