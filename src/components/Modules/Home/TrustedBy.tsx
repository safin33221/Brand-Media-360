
import { motion } from "framer-motion"
import type { ComponentPropsWithoutRef } from "react"
import { cn } from "@/lib/utils"





interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
    reverse?: boolean
    repeat?: number


    pauseOnHover?: boolean;
}

type Mentor = {
    name: string
    expertise: string

}

const mentors: Mentor[] = [
    {
        name: "Md Rokon",
        expertise: "Web Instructor",

    },
    {
        name: "Nazmul Hossain Shaon",
        expertise: "Graphic Design Instructor",

    },
    {
        name: "Md Mustak",
        expertise: "Digital Marketing Instructor",

    },
    {
        name: "Tasnim Islam",
        expertise: "Spoken English Coach",

    },
    {
        name: "Safayet Hossan Safin",
        expertise: "Assistant Web Instructor",
    },
    {
        name: "Belal Hossain",
        expertise: "Assistant Graphic Design",
    },
]

export default function TrustedBy({
    reverse = false,
    repeat = 2,
    ...props
}: MarqueeProps) {
    const direction = reverse ? -1 : 1

    return (
        <section className="py-5 px-4 md:px-8 lg:px-5 ">


            <div
                data-aos="fade-up"
                data-aos-duration="2000"

                className="relative overflow-hidden w-full" {...props}>
                {/* <p className="text-center mb-7 text-xl"> We are GreatBro Academy – Empowering youth with real-world digital skills.</p> */}
                <motion.div

                    className={cn("flex gap-6 w-max")}
                    animate={{ x: [`0%`, `${direction * -50}%`] }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "linear",
                        duration: 20,
                    }}
                >
                    {[...Array(repeat)].flatMap((_, i) =>
                        mentors.map((mentor, idx) => (
                            <div

                                key={`${mentor.name}-${i}-${idx}`}
                                className="min-w-[250px] max-w-[270px] p-[1px] rounded-xl"
                            >
                                <div className={`group-hover:[animation-play-state:paused] bg-white dark:bg-card rounded-xl border shadow-md p-6 text-center hover:shadow-xl transition-all `}>

                                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                                        {mentor.name}
                                    </h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">
                                        {mentor.expertise}
                                    </p>

                                </div>
                            </div>
                        ))
                    )}
                </motion.div>
            </div>
        </section>
    )
}
