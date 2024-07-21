import { TaskType, UserType } from "../types";
import PageHeader from "../Components/PageHeader";
import ActivityCard from "../Components/ActivityCard";
import Chart from "../Components/Chart";
import { getTasksByUserId } from "../lib/apiWrapper";
import { useEffect, useState } from "react";

type HomeProps = { currentUser: UserType };

export default function Home({ currentUser }: HomeProps) {
    const [activityLog, setActivityLog] = useState<TaskType[]>([]);
    const [activitiesCount, setActivitiesCount] = useState(0);
    const [spoonsUsed, setSpoonsUsed] = useState(0);
    const [flareUps, setFlareUps] = useState(0);

    useEffect(() => {
        const user = localStorage.getItem("user_id");
        async function getTasks() {
            console.log("Current User: " + user);
            let response = await getTasksByUserId(Number(user));
            if (response.error) {
                console.log(response.error);
            } else {
                // Get today's date in YYYY-MM-DD format
                const today = new Date().toISOString().split('T')[0];
                
                // Filter activities to include only today's activities
                const todaysActivities = response.data!.filter((task: TaskType) => task.date === today);
                
                setActivityLog(todaysActivities);
                
                // Calculate totals
                setActivitiesCount(todaysActivities.length);
                setSpoonsUsed(todaysActivities.reduce((acc, task) => acc + task.spoons_needed, 0));
                setFlareUps(todaysActivities.filter(task => task.task.toLowerCase().includes("flare")).length);
            }
            console.log("Activity Log:", response.data);
        }
        getTasks();
    }, []);

    return (
        <div className="col-span-4 lg:col-span-8 p-4">
            <PageHeader currentUser={currentUser} />
            <div className="divider"></div>
            <div className="w-full items-center justify-between">
                <div className="w-full p-2">
                    <h3 className="text-lg font-semibold">
                        Today's Activity Log
                    </h3>
                </div>
                <div className="flex flex-wrap md:flex-nowrap w-full gap-2 p-2 md:overflow-y-auto">
                    {activityLog.length > 0 ? (
                        activityLog.map((task, index) => (
                            <ActivityCard key={index} task={task} />
                        ))
                    ) : (
                        <p className="text-center w-full">No activities logged.</p>
                    )}
                    <div className="flex h-28 md:h-48 w-28 md:min-w-48 p-4 items-center justify-items-center">
                        <a
                            className="btn text-base m-auto"
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
                    <div className="col-span-5 md:col-span-3 gap-4">
                        <div className="col-span-5 md:col-span-3 border-2 border-gray-300 rounded-lg bg-sky-50 h-96">
                            <Chart />
                        </div>
                        <div className="flex justify-between w-full gap-4 col-span-5 md:col-span-3 mt-4">
                            <div className="flex items-center border-2 w-1/3 border-gray-300 rounded-lg bg-sky-50 h-24 place-content-center p-8">
                                <p className="font-medium text-nowrap">Activities</p>
                                <p className="text-3xl font-medium w-full text-right">{activitiesCount}</p>
                            </div>
                            <div className="flex items-center border-2 w-1/3 border-gray-300 rounded-lg bg-sky-50 h-24 place-content-center p-8">
                                <p className="font-medium text-nowrap">Spoons Used</p>
                                <p className="text-3xl font-medium w-full text-right">{spoonsUsed}</p>
                            </div>
                            <div className="flex items-center border-2 w-1/3 border-gray-300 rounded-lg bg-sky-50 h-24 place-content-center p-8">
                                <p className="font-medium text-nowrap">Flare Ups</p>
                                <p className="text-3xl font-medium w-full text-right">{flareUps}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-5 md:col-span-2">
                        <div className="border-2 border-gray-300 rounded-lg p-2 bg-sky-50 h-full">
                            Goals
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
