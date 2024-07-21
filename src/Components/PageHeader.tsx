import spoon from "../assets/icons/spoon.svg";
import plus from "../assets/icons/plus.svg";
import caret_down from "../assets/icons/caret_down.svg";
import { TaskType, UserType } from "../types";
import { useEffect, useState } from "react";
import { createTask } from "../lib/apiWrapper";


type PageHeaderProps = {
    currentUser: UserType;
    spoonsUsed?: number;
};

const getGreeting = () => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
        return "Good Morning";
    } else if (currentHour < 18) {
        return "Good Afternoon";
    } else {
        return "Good Evening";
    }
};

export default function PageHeader({ currentUser, spoonsUsed }: PageHeaderProps) {
    const [taskForm, setTaskForm] = useState<Partial<TaskType>>({
        task: "",
        description: "",
        duration: "",
        spoons_needed: 0,
        time_of_day: "",
        user_id: (localStorage.getItem("user_id") as unknown as number), 
    });

    const [spoonsLeft, setSpoonsLeft] = useState(0);
    const [spoonsLabel, setSpoonsLabel] = useState("");
    const [greeting, setGreeting] = useState("Good Day");

 

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setTaskForm({ ...taskForm, [name]: value });
    };

    const handleRadioChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { name, value } = e.target;
        if (name === "spoons_needed" || name === "duration" || name === "time_of_day") {
            setTaskForm({ ...taskForm, [name]: value });
        }
    };

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("taskForm before submit", taskForm);

        const body = {
            task: taskForm.task,
            description: taskForm.description,
            duration: taskForm.duration,
            spoons_needed: taskForm.spoons_needed,
            time_of_day: taskForm.time_of_day,
            user_id: (localStorage.getItem("user_id") as unknown as number),
        };

        console.log("body before submit", body);

        let response = await createTask(body as TaskType);
        if (response.error) {
            console.log(response);
            console.log(response.error);
        } else {
            let newTask = response.data!;
            console.log("success", newTask);
            // setTask([...task, newTask]);
        }
    };

    const getGreeting = () => {
        const currentHour = new Date().getHours();
        if (currentHour < 12) {
            return "Good Morning";
        } else if (currentHour < 18) {
            return "Good Afternoon";
        } else {
            return "Good Evening";
        }
    };

    useEffect(() => {
        setTaskForm({
            ...taskForm,
            user_id: Number(localStorage.getItem("user_id")) ,
        });
        console.log("taskForm after useEffect", taskForm);
        console.log("currentUser after useEffect", currentUser);
    } , []);

    useEffect(() => {
        const spoons = localStorage.getItem("spoons");
        setSpoonsLeft(Number(spoons)-spoonsUsed!);
        console.log("spoonsLeft", spoonsLeft);

        // if ((parseInt(spoons!) * .75) > spoonsUsed!) {
        //     setSpoonsLabel("bg-green-500");
        // }
        // else if ((parseInt(spoons!) * .75) <= spoonsUsed!) {
        //     setSpoonsLabel("bg-yellow-500");
        // }
        // else if ((parseInt(spoons!) * .875) <= spoonsUsed!) {
        //     setSpoonsLabel("bg-orange-500");
        // }
        // else {
        //     setSpoonsLabel("bg-red-500");
        // }

        if ((parseInt(spoons!)) <= spoonsUsed!) {
            setSpoonsLabel("bg-red-500");
        }
        else if ((parseInt(spoons!)-2) == spoonsUsed!) {
            setSpoonsLabel("bg-yellow-500");
        }
        else {
            setSpoonsLabel("bg-green-500");
        }
 }
    
    , [spoonsUsed]);

    useEffect(() => {
        setGreeting(getGreeting());
    }, []);



    return (
        <div className="flex w-full items-center justify-between h-20">
            <div className="w-1/2 p-2">
                <h1 className="text-2xl font-bold">
                {greeting}, {currentUser.first_name}
                </h1>
            </div>
            <div className="flex items-center">
                <div className="dropdown dropdown-bottom dropdown-end">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn m-1 bg-info text-white text-base"
                    >
                        <img src={plus} />{" "}
                        <p className="ml-2 hidden md:block">Log</p>{" "}
                        <img src={caret_down} className="hidden md:block" />
                    </div>

                    <ul
                        tabIndex={0}
                        className="dropdown-content menu bg-black z-[1] w-full min-w-min shadow"
                    >
                        <li>
                            {/* Log Activity Button */}

                            <button
                                className="btn bg-black text-white hover:text-black border-transparent"
                                onClick={() =>
                                    (
                                        document.getElementById(
                                            "logActivity_modal"
                                        ) as HTMLDialogElement
                                    )?.showModal()
                                }
                            >
                                Activity
                            </button>
                        </li>
                        <li>
                            {/* Log Flare Up Button */}

                            <button
                                className="btn bg-black text-white hover:text-black border-transparent"
                                onClick={() =>
                                    (
                                        document.getElementById(
                                            "logFlareUp_modal"
                                        ) as HTMLDialogElement
                                    )?.showModal()
                                }
                            >
                                Flare Up
                            </button>
                        </li>
                    </ul>
                </div>

                {/* Change Spoons Button */}

                <button
                    className={`btn btn-ghost text-base ${spoonsLabel}`}
                    onClick={() =>
                        (
                            document.getElementById(
                                "changeSpoons_modal"
                            ) as HTMLDialogElement
                        )?.showModal()
                    }
                >
                    <img src={spoon} className="ml-6"></img>
                    <p className="mr-6">x{spoonsLeft}</p>
                </button>

                {/* Log Activity Modal */}

                <dialog id="logActivity_modal" className="modal">
                    <div className="modal-box max-w-[750px] w-full md:w-3/4">
                        <h3 className="font-bold text-lg">Log Activity</h3>
                        <form onSubmit={handleFormSubmit}>
                            <input
                                type="text"
                                placeholder="Spend Spoons"
                                name="task"
                                value={taskForm.task}
                                onChange={handleInputChange}
                                className="input input-bordered w-full my-4 bg-sky-50"
                            />
                            <p className="text-medium my-4">
                                How many spoons did you consume?
                            </p>

                            <ul className="flex w-full justify-around gap-1">
                                {[...Array(12)].map((_, i) => (
                                    <li key={i}>
                                        <input
                                            type="radio"
                                            id={`spoons_${i + 1}`}
                                            name="spoons_needed"
                                            value={i + 1}
                                            className="hidden peer"
                                            onChange={handleRadioChange}
                                            // required
                                        />
                                        <label
                                            htmlFor={`spoons_${i + 1}`}
                                            className="inline-flex items-center justify-between p-2 rounded-full cursor-pointer dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 border-2 radio-xl bg-sky-50"
                                        >
                                            <div className="flex justify-center">
                                                <div className="w-full text-base font-semibold">
                                                    {i + 1}
                                                </div>
                                            </div>
                                        </label>
                                    </li>
                                ))}
                            </ul>

                            <p className="text-medium my-4">
                                How long did it take? (aprox.)
                            </p>

                            <ul className="flex flex-wrap w-full justify-around gap-4">
                                {["15min", "30min", "45min", "1hr", "1hr+"].map(
                                    (duration) => (
                                        <li key={duration}>
                                            <input
                                                type="radio"
                                                id={duration}
                                                name="duration"
                                                value={duration}
                                                className="hidden peer"
                                                onChange={handleRadioChange}
                                                // required
                                            />
                                            <label
                                                htmlFor={duration}
                                                className="inline-flex items-center justify-between p-2 rounded-full cursor-pointer dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 border-2 bg-sky-50"
                                            >
                                                <div className="flex justify-center">
                                                    <div className="w-full text-base font-semibold mx-4 my-2">
                                                        {duration === "1hr+"
                                                            ? "1 hr+"
                                                            : duration}
                                                    </div>
                                                </div>
                                            </label>
                                        </li>
                                    )
                                )}
                            </ul>


                            <p className="text-medium my-4">
                                What time of day?
                            </p>

                            <ul className="flex flex-wrap w-full justify-around gap-4">
                                {[
                                    "Early Morning",
                                    "Morning",
                                    "Afternoon",
                                    "Evening",
                                    "Late Evening",
                                ].map((timeOfDay) => (
                                    <li key={timeOfDay}>
                                        <input
                                            type="radio"
                                            id={timeOfDay.replace(" ", "")}
                                            name="time_of_day"
                                            value={timeOfDay}
                                            className="hidden peer"
                                            onChange={handleRadioChange}
                                            required
                                        />
                                        <label
                                            htmlFor={timeOfDay.replace(" ", "")}
                                            className="inline-flex items-center justify-between p-2 rounded-full cursor-pointer dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 border-2 bg-sky-50"
                                        >
                                            <div className="flex justify-center">
                                                <div className="w-full text-base font-semibold mx-4 my-2">
                                                    {timeOfDay}
                                                </div>
                                            </div>
                                        </label>
                                    </li>
                                ))}
                            </ul>


                            <p className="text-medium my-4">How did it go?</p>
                            <textarea
                                className="textarea textarea-bordered w-full min-h-18"
                                placeholder="Add any extra details you would like to remember about this activity."
                                id="description"
                                name="description"
                                value={taskForm.description}
                                onChange={handleInputChange}
                            ></textarea>
                            <div className = "flex justify-between mt-4">
                            <button className="btn mx-2 "
                                    onClick={() =>
                                (
                                    document.getElementById(
                                        "logActivity_modal"
                                    ) as HTMLDialogElement
                                ).close()
                            }>
                                        Cancel
                                    </button>
                            <button
                                type="submit"
                                className="btn mx-2 bg-info text-white"
                                onClick={() =>
                                    (
                                        document.getElementById(
                                            "logActivity_modal"
                                        ) as HTMLDialogElement
                                    ).close()}
                            >
                                Save Activity
                            </button>
                            </div>
                        </form>
                        <div className="w-full">
                            <div className="modal-action mt-4">
                                <form
                                    method="dialog"
                                    className="flex w-full justify-between  pt-18"
                                >
                                    {/* if there is a button in form, it will close the modal */}
                                    {/* <button className="btn mx-2 ">
                                        Cancel
                                    </button>
                                    <button className="btn mx-2 bg-info text-white">
                                        Save Activity
                                    </button> */}
                                </form>
                            </div>
                        </div>
                    </div>
                </dialog>

                {/* Log Flare Up */}

                <dialog id="logFlareUp_modal" className="modal">
                    <div className="modal-box max-w-[750px] w-full md:w-3/4">
                        <h3 className="font-bold text-lg">Log Flare Up</h3>

                        <p className="text-medium my-4">
                            Please describe what you are experiencing (optional)
                        </p>
                        <textarea
                            className="textarea textarea-bordered w-full min-h-36"
                            placeholder="Add any extra details you would like to remember about this."
                        ></textarea>

                        <div className="w-full">
                            <div className="modal-action mt-4">
                                <form
                                    method="dialog"
                                    className="flex w-full justify-between  pt-18"
                                >
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn mx-2">Cancel</button>
                                    <button className="btn mx-2 bg-info text-white">
                                        Save Changes
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </dialog>

                {/* Change Spoons Modal */}

                <dialog id="changeSpoons_modal" className="modal">
                    <div className="modal-box max-w-[750px] w-full md:w-3/4">
                        <h3 className="font-bold text-lg">Daily Spoons</h3>

                        <div className="flex gap-2 m-2">
                            <div className="flex w-1/2 border-2 rounded-lg p-2 bg-sky-50">
                                <span className="w-full">Spoons</span>
                                <div className="relative w-40 h-40">
                                    <svg
                                        className="w-full h-full"
                                        viewBox="0 0 100 100"
                                    >
                                        {/* <!-- Background circle --> */}
                                        <circle
                                            className="text-gray-200 stroke-current"
                                            stroke-width="10"
                                            cx="50"
                                            cy="50"
                                            r="40"
                                            fill="transparent"
                                        ></circle>
                                        {/* <!-- Progress circle --> */}
                                        <circle
                                            className="text-info  progress-ring__circle stroke-current"
                                            stroke-width="10"
                                            stroke-linecap="round"
                                            cx="50"
                                            cy="50"
                                            r="40"
                                            fill="transparent"
                                            stroke-dasharray="251.2"
                                            stroke-dashoffset="calc(251.2px - (251.2px * 70) / 100)"
                                        ></circle>

                                        {/* <!-- Center text --> */}
                                        <text
                                            x="50"
                                            y="50"
                                            font-family="Verdana"
                                            font-size="12"
                                            text-anchor="middle"
                                            alignment-baseline="middle"
                                        >
                                            70%
                                        </text>
                                    </svg>
                                </div>
                            </div>
                            <div className="w-1/2 border-2 rounded-lg p-2 bg-sky-50">
                                Activity
                            </div>
                        </div>

                        <div className="w-full">
                            <div className="modal-action mt-4">
                                <form
                                    method="dialog"
                                    className="flex w-full justify-between  pt-18"
                                >
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn mx-2">Cancel</button>
                                    <button className="btn mx-2 bg-info text-white">
                                        Save Changes
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    );
}

