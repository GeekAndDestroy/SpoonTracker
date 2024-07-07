import { UserType } from "../types";
import PageHeader from "../Components/PageHeader";
import ActivityCard from "../Components/ActivityCard";


type HomeProps = { currentUser: UserType };

export default function Home({}: HomeProps) {
    return (
        <div className="col-span-4 p-4">
            <PageHeader />
            <div className="w-full items-center justify-between">
                <div className="w-full p-2">
                    <h3 className="text-lg font-semibold">
                        Today's Activity Log
                    </h3>
                </div>
                <div className="flex w-full gap-2 p-2 overflow-y-auto">
                    <ActivityCard />
                    <ActivityCard />
                    <ActivityCard />
                    <ActivityCard />
                    <ActivityCard />
                    <div className="flex h-48  p-4 items-center justify-items-center">
                        <a
                            className="btn  text-base m-auto"
                            href="./activitylog"
                        >
                            See More
                        </a>
                    </div>
                </div>
            </div>
            <div className="w-full items-center justify-between mt-8">
                <div className="w-full p-2">
                    <h3 className="text-lg font-semibold">
                        Energy Consumption
                    </h3>
                </div>
                <div className="grid grid-cols-5 w-full gap-4 p-2">
                    <div className="col-span-3 gap-4">
                        <div className="col-span-3 border-2 border-gray-300 rounded-lg p-2 bg-sky-100 h-96">
                            Graph
                        </div>
                        <div className="flex justify-between w-full gap-4 col-span-3 mt-4">
                            <div className="border-2 w-1/3 border-gray-300 rounded-lg p-2 bg-sky-100 h-24">
                                Activities
                            </div>
                            <div className="border-2 w-1/3 border-gray-300 rounded-lg p-2 bg-sky-100 h-24">
                                Spoons Used
                            </div>
                            <div className="border-2 w-1/3 border-gray-300 rounded-lg p-2 bg-sky-100 h-24">
                                Flare Ups
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <div className="border-2 border-gray-300 rounded-lg p-2 bg-sky-100 h-full">
                            Goals
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
