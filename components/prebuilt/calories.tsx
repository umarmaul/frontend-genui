import { Card } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

export interface CaloriesProps {
    bmi: number;
    cathegory: string;
    bmr: number;
    maintenance_calories: number;
    required_calories: number;
}

export function CaloriesLoading(): JSX.Element {
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

export function Calories(props: CaloriesProps): JSX.Element {
    return (
        <Card className="w-[275px] max-w-[275px] p-2 h-[275px] max-h-[275px] flex flex-col justify-center bg-yellow-400">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-xl font-bold underline text-accent-red">
                    Your result:
                </h1>
                <div className="flex flex-col items-center justify-center font-bold my-2 text-black">
                    <p className="text-2xl">BMI: {props.bmi}</p>
                    <p className="text-xl">({props.cathegory})</p>
                </div>
                <div className="flex flex-col items-center justify-center text-center my-2 bg-white p-2 rounded-lg">
                    <p className="text-xl font-medium text-black">
                        BMR: {props.bmr}
                    </p>
                    <p className="text-md font-medium text-accent-red">
                        maintenance calories: {props.maintenance_calories}
                    </p>
                    <p className="text-md font-medium text-accent-red">
                        required calories: {props.required_calories}
                    </p>
                </div>
            </div>
        </Card>
    );
}
