import { UserType } from "../types";
import PageHeader from "../Components/PageHeader";
import { useEffect, useState } from "react";
import { getTasksByUserId } from "../lib/apiWrapper";
import { TaskType } from "../types";
import Chart from "../Components/Chart";

type HomeProps = { currentUser: UserType };

export default function Home({ currentUser }: HomeProps) {
    const [activityLog, setActivityLog] = useState<TaskType[] | undefined>([]);
    const [activitiesCount, setActivitiesCount] = useState(0);
    const [spoonsUsed, setSpoonsUsed] = useState(0);
    const [flareUps, setFlareUps] = useState(0);
    const [totalSpoonsUsed, setTotalSpoonsUsed] = useState(0);
    const [startDate, setStartDate] = useState("2024-01-01");
    const [endDate, setEndDate] = useState(new Date().toISOString().split('T')[0]);

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === "startDate") {
            setStartDate(e.target.value);
        } else if (e.target.name === "endDate") {
            setEndDate(e.target.value);
        }
    };

    useEffect(() => {
        const user = localStorage.getItem("user_id");
        async function getTasks() {
            console.log("Current User: " + user);
            let response = await getTasksByUserId(Number(user));
            if (response.error) {
                console.log(response.error);
            } else {
                const today = new Date().toISOString().split('T')[0];
                const todaysActivities = response.data!.filter((task: TaskType) => task.date === today);
                setSpoonsUsed(todaysActivities.reduce((acc, task) => acc + task.spoons_needed, 0));
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
                const filteredTasks = response.data!.filter((task: TaskType) => {
                    return task.date >= startDate && task.date <= endDate;
                });
                setActivityLog(filteredTasks);
                setActivitiesCount(filteredTasks.length);
                setTotalSpoonsUsed(filteredTasks.reduce((acc, task) => acc + task.spoons_needed, 0));
                setFlareUps(filteredTasks.filter(task => task.task.toLowerCase().includes("flare")).length);
            }
            console.log("Filtered Activity Log:", filteredTasks);
        }
        getTasks();
    }, [startDate, endDate]);

    return (
        <div className="col-span-4 lg:col-span-8 p-4">
            <PageHeader currentUser={currentUser} spoonsUsed={spoonsUsed} />
            <div className="divider"></div>
            <div className="w-full items-center justify-between">
                <div className="flex w-full p-2 items-center justify-between">
                    <div>
                        <h3 className="text-lg font-semibold self-center">Activity Log</h3>
                    </div>
                    <div className="">
                        <form>
                            <label>Start: </label>
                            <input
                                type="date"
                                className="border-2 rounded-lg p-2 m-2"
                                name="startDate"
                                value={startDate}
                                onChange={handleDateChange}
                            />
                            <label>End: </label>
                            <input
                                type="date"
                                className="border-2 rounded-lg p-2 m-2"
                                name="endDate"
                                value={endDate}
                                onChange={handleDateChange}
                            />
                        </form>
                    </div>
                </div>
                <div className="flex w-full p-2 rounded-lg border-gray-200 border-2 bg-sky-50 max-h-[40vh]">
                    <div className="overflow-x-auto w-full">
                        <table className="table table-pin-rows">
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
                <div className="border-2 border-gray-300 rounded-lg bg-sky-50 h-96 mt-6">
                    <Chart />
                </div>
                <div className="flex justify-between w-full gap-4 col-span-5 md:col-span-3 mt-4">
                    <div className="flex items-center border-2 w-1/3 border-gray-300 rounded-lg bg-sky-50 h-24 place-content-center p-8">
                        <p className="font-medium text-nowrap">Activities</p>
                        <p className="text-3xl font-medium w-full text-right">{activitiesCount}</p>
                    </div>
                    <div className="flex items-center border-2 w-1/3 border-gray-300 rounded-lg bg-sky-50 h-24 place-content-center p-8">
                        <p className="font-medium text-nowrap">Total Spoons Used</p>
                        <p className="text-3xl font-medium w-full text-right">{totalSpoonsUsed}</p>
                    </div>
                    <div className="flex items-center border-2 w-1/3 border-gray-300 rounded-lg bg-sky-50 h-24 place-content-center p-8">
                        <p className="font-medium text-nowrap">Flare Ups</p>
                        <p className="text-3xl font-medium w-full text-right">{flareUps}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
