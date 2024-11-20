import Link from "next/link";
import { Card } from "../ui/card";
import { Skeleton } from "../ui/skeleton";
import Image from "next/image";

export interface MenuProps {
    id: number;
    calories: number;
    gramation: number;
    description: string;
    menu_name: string;
}

export function MenuLoading(): JSX.Element {
    return (
        <Card className="w-[275px] max-w-[275px] p-2 h-[275px] max-h-[275px] flex flex-col justify-center bg-yellow-400">
            <div className="flex justify-between items-center mb-1">
                <Skeleton className="h-[16px] w-[100px]" />
                <Skeleton className="h-[16px] w-[75px]" />
            </div>
            <div className="text-left mb-4">
                <Skeleton className="h-[16px] w-[125px]" />
            </div>
            <div className="flex-grow flex flex-col justify-center items-center mb-8">
                <div className="flex flex-row gap-2">
                    <Skeleton className="h-[96px] w-[48px] rounded-3xl" />
                    <Skeleton className="h-[96px] w-[48px] rounded-3xl" />
                    <Skeleton className="w-[32px] h-[32px] rounded-full" />
                </div>
            </div>
            <div className="pb-4">
                <Skeleton className="h-[26px] rounded-3xl w-full" />
            </div>
        </Card>
    );
}

export function Menu(props: MenuProps): JSX.Element {
    return (
        <Card className="w-[325px] max-w-[325px] p-4 h-[325px] max-h-[325px] flex flex-col justify-between bg-yellow-400">
            <div className="flex flex-col text-center items-center justify-center font-bold">
                <p className="text-lg underline">{props.menu_name}</p>
            </div>
            <div className="flex flex-col items-center justify-center my-1">
                <p className="text-md font-medium">
                    Gramasi: {props.gramation}
                </p>
                <p>{props.description}</p>
            </div>
            <div className="flex justify-center items-center font-bold">
                <p className="text-lg text-white bg-accent-red p-1 rounded-md">
                    {props.calories} kalori
                </p>
            </div>
            <Link
                href={"https://wa.me/6285141739229"}
                className="flex justify-center items-center text-green-900 font-bold bg-white p-2 rounded-md mt-4 space-x-2 hover:bg-green-900 hover:text-white"
            >
                <Image
                    src="logo_wa_trans.svg"
                    alt="WhatsApp Logo"
                    width={40}
                    height={40}
                />
                <p>Pesan Sekarang</p>
            </Link>
        </Card>
    );
}
