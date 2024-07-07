import plus_math from "../assets/icons/plus_math.svg";
import spoon from "../assets/icons/spoon.svg";

type PageHeaderProps = {}

export default function PageHeader({}: PageHeaderProps) {
  return (
    <div className="flex w-full items-center justify-between h-20">
                <div className="w-1/2 p-2">
                    <h1 className="text-2xl font-bold">Good Morning, 000000</h1>
                </div>
                <div className="flex items-center">
                    <button
                        className="btn bg-info text-white text-base"
                        onClick={() =>
                            (
                                document.getElementById(
                                    "logActivity_modal"
                                ) as HTMLDialogElement
                            )?.showModal()
                        }
                    >
                        <img src={plus_math}></img>Log Activity
                    </button>

                    <dialog id="logActivity_modal" className="modal">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Log Activity</h3>
                            <input
                                type="text"
                                placeholder="Spend Spoons"
                                className="input input-bordered w-full my-4"
                            />
                            <p className="text-medium my-4">
                                How many spoons did you consume?
                            </p>
                            <ul className="flex gap-1">
                                <li>
                                    <input
                                        type="radio"
                                        id="spoons_1"
                                        name="spoons_used"
                                        value="spoons_1"
                                        className="hidden peer"
                                        required
                                    />
                                    <label
                                        htmlFor="spoons_1"
                                        className="inline-flex items-center justify-between p-2 rounded-full cursor-pointer  dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 border-2 radio-xl"
                                    >
                                        <div className="flex justify-center">
                                            <div className="w-full text-base font-semibold">
                                                1
                                            </div>
                                        </div>
                                    </label>
                                </li>
                                <li>
                                    <input
                                        type="radio"
                                        id="spoons_2"
                                        name="spoons_used"
                                        value="spoons_2"
                                        className="hidden peer"
                                        required
                                    />
                                    <label
                                        htmlFor="spoons_2"
                                        className="inline-flex items-center justify-between p-2 rounded-full cursor-pointer  dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 border-2 radio-xl"
                                    >
                                        <div className="flex justify-center">
                                            <div className="w-full text-base font-semibold">
                                                2
                                            </div>
                                        </div>
                                    </label>
                                </li>
                                <li>
                                    <input
                                        type="radio"
                                        id="spoons_3"
                                        name="spoons_used"
                                        value="spoons_3"
                                        className="hidden peer"
                                        required
                                    />
                                    <label
                                        htmlFor="spoons_3"
                                        className="inline-flex items-center justify-between p-2 rounded-full cursor-pointer  dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 border-2 radio-xl"
                                    >
                                        <div className="flex justify-center">
                                            <div className="w-full text-base font-semibold">
                                                3
                                            </div>
                                        </div>
                                    </label>  
                                </li>
                                <li>
                                    <input
                                        type="radio"
                                        id="spoons_4"
                                        name="spoons_used"
                                        value="spoons_4"
                                        className="hidden peer"
                                        required
                                    />
                                    <label
                                        htmlFor="spoons_4"
                                        className="inline-flex items-center justify-between p-2 rounded-full cursor-pointer  dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 border-2 radio-xl"
                                    >
                                        <div className="flex justify-center">
                                            <div className="w-full text-base font-semibold">
                                                4
                                            </div>
                                        </div>
                                    </label>
                                </li>
                                <li>
                                    <input
                                        type="radio"
                                        id="spoons_5"
                                        name="spoons_used"
                                        value="spoons_5"
                                        className="hidden peer"
                                        required
                                    />
                                    <label
                                        htmlFor="spoons_5"
                                        className="inline-flex items-center justify-between p-2 rounded-full cursor-pointer  dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 border-2 radio-xl"
                                    >
                                        <div className="flex justify-center">
                                            <div className="w-full text-base font-semibold">
                                                5
                                            </div>
                                        </div>
                                    </label>
                                </li>
                                <li>
                                    <input
                                        type="radio"
                                        id="spoons_6"
                                        name="spoons_used"
                                        value="spoons_6"
                                        className="hidden peer"
                                        required
                                    />
                                    <label
                                        htmlFor="spoons_6"
                                        className="inline-flex items-center justify-between p-2 rounded-full cursor-pointer  dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 border-2 radio-xl"
                                    >
                                        <div className="flex justify-center">
                                            <div className="w-full text-base font-semibold">
                                                6
                                            </div>
                                        </div>
                                    </label>
                                </li>
                                <li>
                                    <input
                                        type="radio"
                                        id="spoons_7"
                                        name="spoons_used"
                                        value="spoons_7"
                                        className="hidden peer"
                                        required
                                    />
                                    <label
                                        htmlFor="spoons_7"
                                        className="inline-flex items-center justify-between p-2 rounded-full cursor-pointer  dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 border-2 radio-xl"
                                    >
                                        <div className="flex justify-center">
                                            <div className="w-full text-base font-semibold">
                                                7
                                            </div>
                                        </div>
                                    </label>
                                </li>
                                <li>
                                    <input
                                        type="radio"
                                        id="spoons_8"
                                        name="spoons_used"
                                        value="spoons_8"
                                        className="hidden peer"
                                        required
                                    />
                                    <label
                                        htmlFor="spoons_8"
                                        className="inline-flex items-center justify-between p-2 rounded-full cursor-pointer  dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 border-2 radio-xl"
                                    >
                                        <div className="flex justify-center">
                                            <div className="w-full text-base font-semibold">
                                                8
                                            </div>
                                        </div>
                                    </label>
                                </li>
                                <li>
                                    <input
                                        type="radio"
                                        id="spoons_9"
                                        name="spoons_used"
                                        value="spoons_9"
                                        className="hidden peer"
                                        required
                                    />
                                    <label
                                        htmlFor="spoons_9"
                                        className="inline-flex items-center justify-between p-2 rounded-full cursor-pointer  dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 border-2 radio-xl"
                                    >
                                        <div className="flex justify-center">
                                            <div className="w-full text-base font-semibold">
                                                9
                                            </div>
                                        </div>
                                    </label>
                                </li>
                                <li>
                                    <input
                                        type="radio"
                                        id="spoons_10"
                                        name="spoons_used"
                                        value="spoons_10"
                                        className="hidden peer"
                                        required
                                    />
                                    <label
                                        htmlFor="spoons_10"
                                        className="inline-flex items-center justify-between p-2 rounded-full cursor-pointer  dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 border-2 radio-xl"
                                    >
                                        <div className="flex justify-center">
                                            <div className="w-full text-base font-semibold">
                                                10
                                            </div>
                                        </div>
                                    </label>
                                </li>
                                <li>
                                    <input
                                        type="radio"
                                        id="spoons_11"
                                        name="spoons_used"
                                        value="spoons_11"
                                        className="hidden peer"
                                        required
                                    />
                                    <label
                                        htmlFor="spoons_11"
                                        className="inline-flex items-center justify-between p-2 rounded-full cursor-pointer  dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 border-2 radio-xl"
                                    >
                                        <div className="flex justify-center ">
                                            <p className="w-full text-base font-semibold p-auto text-center">
                                                11
                                            </p>
                                        </div>
                                    </label>
                                </li>
                                <li>
                                    <input
                                        type="radio"
                                        id="spoons_12"
                                        name="spoons_used"
                                        value="spoons_12"
                                        className="hidden peer"
                                        required
                                    />
                                    <label
                                        htmlFor="spoons_12"
                                        className="inline-flex items-center justify-between p-2 rounded-full cursor-pointer  dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 border-2 radio-xl"
                                    >
                                        <div className="flex justify-center">
                                            <div className="w-full text-base font-semibold">
                                                12
                                            </div>
                                        </div>
                                    </label>
                                </li>  
                            </ul>
                            <p className="text-medium my-4">
                                How long did it take? (aprox.)
                            </p>
                            <ul className="flex flex-wrap gap-4">
                                <li>
                                    <input
                                        type="radio"
                                        id="15min"
                                        name="activity_length"
                                        value="15min"
                                        className="hidden peer"
                                        required
                                    />
                                    <label
                                        htmlFor="activity_length"
                                        className="inline-flex items-center justify-between p-2 rounded-full cursor-pointer  dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 border-2 "
                                    >
                                        <div className="flex justify-center">
                                            <div className="w-full text-base font-semibold mx-4">
                                                15 mins
                                            </div>
                                        </div>
                                    </label>
                                </li>
                                <li>
                                    <input
                                        type="radio"
                                        id="30min"
                                        name="activity_length"
                                        value="30min"
                                        className="hidden peer"
                                        required
                                    />
                                    <label
                                        htmlFor="activity_length"
                                        className="inline-flex items-center justify-between p-2 rounded-full cursor-pointer  dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 border-2 "
                                    >
                                        <div className="flex justify-center">
                                            <div className="w-full text-base font-semibold mx-4">
                                            30 mins
                                            </div>
                                        </div>
                                    </label>
                                </li>
                                <li>
                                    <input
                                        type="radio"
                                        id="45min"
                                        name="activity_length"
                                        value="45min"
                                        className="hidden peer"
                                        required
                                    />
                                    <label
                                        htmlFor="activity_length"
                                        className="inline-flex items-center justify-between p-2 rounded-full cursor-pointer  dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 border-2 "
                                    >
                                        <div className="flex justify-center">
                                            <div className="w-full text-base font-semibold mx-4">
                                            45 mins
                                            </div>
                                        </div>
                                    </label>
                                </li> 
                                <li>
                                    <input
                                        type="radio"
                                        id="1hr"
                                        name="activity_length"
                                        value="1hr"
                                        className="hidden peer"
                                        required
                                    />
                                    <label
                                        htmlFor="activity_length"
                                        className="inline-flex items-center justify-between p-2 rounded-full cursor-pointer  dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 border-2 "
                                    >
                                        <div className="flex justify-center">
                                            <div className="w-full text-base font-semibold mx-4">
                                            1 hr
                                            </div>
                                        </div>
                                    </label>
                                </li>
                                <li>
                                    <input
                                        type="radio"
                                        id="1hr+"
                                        name="activity_length"
                                        value="1hr+"
                                        className="hidden peer"
                                        required
                                    />
                                    <label
                                        htmlFor="activity_length"
                                        className="inline-flex items-center justify-between p-2 rounded-full cursor-pointer  dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 border-2 "
                                    >
                                        <div className="flex justify-center">
                                            <div className="w-full text-base font-semibold mx-4">
                                            1 hr+
                                            </div>
                                        </div>
                                    </label>
                                </li>
                            </ul>
                            <p className="text-medium my-4">
                                What time of day?
                            </p>
                            <ul className="flex flex-wrap gap-4">
                                <li>
                                    <input
                                        type="radio"
                                        id="EM"
                                        name="activity_time"
                                        value="EM"
                                        className="hidden peer"
                                        required
                                    />
                                    <label
                                        htmlFor="activity_time"
                                        className="inline-flex items-center justify-between p-2 rounded-full cursor-pointer  dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 border-2 "
                                    >
                                        <div className="flex justify-center">
                                            <div className="w-full text-base font-semibold mx-4">
                                                Early Morning
                                            </div>
                                        </div>
                                    </label>
                                </li>
                                <li>
                                    <input
                                        type="radio"
                                        id="M"
                                        name="activity_time"
                                        value="M"
                                        className="hidden peer"
                                        required
                                    />
                                    <label
                                        htmlFor="activity_time"
                                        className="inline-flex items-center justify-between p-2 rounded-full cursor-pointer  dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 border-2 "
                                    >
                                        <div className="flex justify-center">
                                            <div className="w-full text-base font-semibold mx-4">
                                            Morning
                                            </div>
                                        </div>
                                    </label>
                                </li>
                                <li>
                                    <input
                                        type="radio"
                                        id="A"
                                        name="activity_time"
                                        value="A"
                                        className="hidden peer"
                                        required
                                    />
                                    <label
                                        htmlFor="activity_time"
                                        className="inline-flex items-center justify-between p-2 rounded-full cursor-pointer  dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 border-2 "
                                    >
                                        <div className="flex justify-center">
                                            <div className="w-full text-base font-semibold mx-4">
                                            Afternoon
                                            </div>
                                        </div>
                                    </label>
                                </li> 
                                <li>
                                    <input
                                        type="radio"
                                        id="E"
                                        name="activity_time"
                                        value="E"
                                        className="hidden peer"
                                        required
                                    />
                                    <label
                                        htmlFor="activity_time"
                                        className="inline-flex items-center justify-between p-2 rounded-full cursor-pointer  dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 border-2 "
                                    >
                                        <div className="flex justify-center">
                                            <div className="w-full text-base font-semibold mx-4">
                                            Evening
                                            </div>
                                        </div>
                                    </label>
                                </li>
                                <li>
                                    <input
                                        type="radio"
                                        id="LE"
                                        name="activity_time"
                                        value="LE"
                                        className="hidden peer"
                                        required
                                    />
                                    <label
                                        htmlFor="activity_time"
                                        className="inline-flex items-center justify-between p-2 rounded-full cursor-pointer  dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 border-2 "
                                    >
                                        <div className="flex justify-center">
                                            <div className="w-full text-base font-semibold mx-4">
                                            Late Evening
                                            </div>
                                        </div>
                                    </label>
                                </li>
                            </ul>
                            <div className="w-full">
                                <div className="modal-action mt-20">
                                    <form method="dialog" className="flex w-full justify-between  pt-18">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn mx-2 ">Cancel</button>
                                        <button className="btn mx-2 bg-info">Save Activity</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </dialog>

                    <img src={spoon} className="ml-6"></img>
                    <p className="mr-6">x2</p>
                </div>
            </div>
  )
}