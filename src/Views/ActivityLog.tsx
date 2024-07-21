import { UserType } from "../types";
import PageHeader from "../Components/PageHeader";
import { useEffect, useState } from "react";
import { getTasksByUserId } from "../lib/apiWrapper";
import { TaskType } from "../types";


type HomeProps = { currentUser: UserType };

export default function Home({ currentUser }: HomeProps) {

    const [activityLog, setActivityLog] = useState<TaskType[] | undefined>([]);

    // const [activityLogToday, setActivityLogToday] = useState<TaskType[]>([]);
    // const [activitiesCount, setActivitiesCount] = useState(0);
    const [spoonsUsed, setSpoonsUsed] = useState(0);
    // const [flareUps, setFlareUps] = useState(0);

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
                
                // setActivityLogToday(todaysActivities);
                
                // Calculate totals
                // setActivitiesCount(todaysActivities.length);
                setSpoonsUsed(todaysActivities.reduce((acc, task) => acc + task.spoons_needed, 0));
                // setFlareUps(todaysActivities.filter(task => task.task.toLowerCase().includes("flare")).length);
            }
            console.log("Activity Log:", response.data);
        }
        getTasks();
    }, []);

    useEffect(() => {
        const user = localStorage.getItem("user_id");
        async function getTasks() {
            console.log("Current User: " + user);
            let response = await getTasksByUserId(Number(user));
            if (response.error) {
                console.log(response.error);
            } else {
                setActivityLog(response.data);
            }
            console.log("Activity Log:", response.data);
        }
        getTasks();
    }, []);

    return (
        <div className="col-span-4 lg:col-span-8 p-4">
            <PageHeader currentUser={currentUser} spoonsUsed={spoonsUsed}/>
            <div className="divider"></div>
            <div className="w-full items-center justify-between">
                <div className="w-full p-2">
                    <h3 className="text-lg font-semibold">Activity Log</h3>
                </div>
                <div className="flex w-full p-2 rounded-lg border-gray-200 border-2 bg-sky-50 max-h-[75vh]">
                    <div className="overflow-x-auto w-full">
                        <table className="table table-pin-rows">
                            {/* head */}
                            <thead>
                                <tr className="bg-gray-100 rounded-lg text-bold text-black border-2">
                                    <th>Date</th>
                                    <th>Time</th>
                                    <th>Activity</th>
                                    <th># of Spoons</th>
                                    <th>User Feedback</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                            
                                {activityLog && activityLog.length > 0 ? (
                                    activityLog.slice().reverse().map((task, index) => (
                                        <tr className="hover" key={index}>
                                            <td>{task.date}</td>
                                            <td>{task.time_of_day}</td>
                                            <td className="text-semibold text-lg">{task.task}</td>
                                            <td>{task.spoons_needed} Spoons consumed</td>
                                            <td>{task.description}</td>
                                            <td>...</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={6} className="text-center">
                                            No activities logged.
                                        </td>
                                    </tr>
                                )}
                                
                                
                               
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
