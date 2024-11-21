"use client";

import Image from "next/image";
import Link from "next/link";

export function FloatingContactBtn() {
    return (
        <Link
            className="fixed md:bottom-5 bottom-3 right-5 z-50 flex items-center"
            href={"https://forms.gle/FGqP8CbezznY8BWQ8"}
        >
            <div className="relative">
                <button className="rounded-full border-2 border-white bg-purple-700 px-4 md:text-lg text-xs font-bold text-white hover:bg-purple-600">
                    <div className="pr-8">Klik untuk isi survey</div>
                </button>
                <Image
                    src={"/google-form-icon.png"}
                    alt="WhatsApp Logo"
                    width={40} // Set the desired width
                    height={40} // Set the desired height
                    quality={100}
                    className="absolute right-0 top-1/2 -translate-y-1/2 transform" // Positioning the image
                />
            </div>
        </Link>
    );
}
