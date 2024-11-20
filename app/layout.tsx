import "./globals.css";
import type { Metadata } from "next";

import { EndpointsContext } from "./agent";
import { ReactNode } from "react";
import { NavigationBar } from "../components/nav/navigation-bar";

export const metadata: Metadata = {
    title: "Maimeals AI",
    description:
        "AI for nutrition recommendations assistant and menu recommendations",
    icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout(props: { children: ReactNode }) {
    return (
        <html lang="en">
            <body className="flex flex-col space-y-6 ">
                <NavigationBar />
                <div className="flex justify-center items-center h-screen bg-accent-red p-4 md:p-12">
                    <EndpointsContext>{props.children}</EndpointsContext>
                </div>
            </body>
        </html>
    );
}
