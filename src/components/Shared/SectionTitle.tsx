

interface SectionTitleProps {
    title: string;
    subtitle?: string;
    align?: "left" | "center" | "right";
}

export default function SectionTitle({
    title = "",
    subtitle = "",
    align = "center",
}: SectionTitleProps) {
    const alignment =
        align === "left"
            ? "text-left items-start"
            : align === "right"
                ? "text-right items-end"
                : "text-center items-center";

    return (
        <div className={`flex flex-col gap-2 w-full ${alignment} max-w-2xl mx-auto mb-10`}>
            <h2 className="text-2xl md:text-3xl font-bold ">
                {title}
            </h2>
            {subtitle && (
                <p className="text-gray-600 text-sm md:text-base">{subtitle}</p>
            )}
            <div className="w-16 h-1 bg-primary rounded-full mt-2"></div>
        </div>
    );
}
