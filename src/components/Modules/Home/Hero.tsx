import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Hero = () => {
    return (
        <section className="mt-10">
            <div >
                <div className="grid items-center gap-8 lg:grid-cols-2">
                    {/* Left Side */}
                    <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                        <Badge variant="outline" className="text-lg">
                            ✨ Your Brand Builder
                            <ArrowUpRight className="ml-2 size-4" />
                        </Badge>

                        <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
                            Complete Branding, Marketing & Media Solutions in One Place.
                        </h1>

                        <p className="text-muted-foreground mb-8 max-w-xl lg:text-xl">
                            At BrandMedia360, we go beyond marketing to craft your brand’s story. With digital marketing, creative design, and powerful media production, we build brands that connect, inspire, and grow in the digital world.
                        </p>

                        <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
                            <Button asChild className="w-full sm:w-auto">
                                <a>Discover all</a>
                            </Button>

                            <Button asChild variant="outline" className="w-full sm:w-auto">
                                <a>
                                    View on Facebook
                                    <ArrowRight className="size-4" />
                                </a>
                            </Button>
                        </div>
                    </div>

                    {/* Right Side Image */}
                    <img
                        src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                        alt="Hero section demo image showing interface components"
                        className="max-h-96 w-full rounded-md object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export { Hero };
