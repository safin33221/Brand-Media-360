import type { ReactNode } from "react";
import Navbar from "../Shared/Navbar";

export default function CommonLayout({ children }: { children: ReactNode }) {
    return (
        <div className=" flex flex-col min-h-screen">
            <nav>
                <Navbar />
            </nav>
            <main className="grow-1  container mx-auto">
                {children}
            </main>
        </div>
    );
};
