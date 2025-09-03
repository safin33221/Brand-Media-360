// components/Paragraph.tsx
import React from "react";

interface ParagraphProps {
    children: React.ReactNode;
    className?: string; // Optional additional styling
}

const Paragraph: React.FC<ParagraphProps> = ({ children, className }) => {
    return (
        <p className={`text-muted-foreground mb-8 max-w-xl lg:text-xl  leading-relaxed ${className}`}>
            {children}
        </p>
    );
};

export default Paragraph;
