import "./globals.css";
import type { Metadata } from "next";

import { EndpointsContext } from "./agent";
import { ReactNode } from "react";

export const metadata: Metadata = {
    title: "Maimeals AI",
    description:
        "AI for nutrition recommendations assistant and menu recommendations",
};

export default function RootLayout(props: { children: ReactNode }) {
    return (
        <html lang="en">
            <body>
                <div className="flex justify-center items-center h-screen bg-accent-red p-4 md:p-12">
                    <EndpointsContext>{props.children}</EndpointsContext>
                </div>
            </body>
        </html>
    );
}
