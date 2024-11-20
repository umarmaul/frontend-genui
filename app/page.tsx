import { FloatingContactBtn } from "@/components/floating-contact-btn";
import Chat from "@/components/prebuilt/chat";

export default function Home() {
    return (
        <main className="flex justify-center items-center lg:px-24 px-2 overscroll-none">
            <div className="flex flex-col space-y-4">
                <p className="md:text-4xl text-lg text-center font-bold text-white">
                    Hello, m
                    <span className="text-accent-red bg-yellow-400">AI</span>
                    Meals here. What can I help?
                </p>
                <Chat />
                <FloatingContactBtn />
            </div>
        </main>
    );
}
