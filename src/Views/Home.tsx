import { UserType } from "../types";
import ActivityCard from "../Components/ActivityCard";
import plus_math from "../assets/icons/plus_math.svg";
import spoon from "../assets/icons/spoon.svg";

type HomeProps = { currentUser: UserType };

export default function Home({}: HomeProps) {
    return (
        <div className="col-span-4 p-4">
            <div className="flex w-full items-center justify-between h-20">
                <div className="w-1/2 p-2">
                    <h1 className="text-2xl font-bold">Good Morning, 000000</h1>
                </div>
                <div className="flex items-center">
                    <button className="btn bg-info text-white text-base">
                        <img src={plus_math}></img>Log Activity
                    </button>
                    <img src={spoon} className="ml-6"></img>
                    <p className="mr-6">x2</p>
                </div>
            </div>
            <div className="w-full items-center justify-between">
              <div className="w-full p-2">
                <h3 className="text-lg font-semibold">Today's Activity Log</h3>
              </div>
              <div className="flex w-full gap-2 p-2">
                <ActivityCard />
                <ActivityCard />
                <ActivityCard />
                <ActivityCard />
                <div className="flex h-48  p-4 items-center justify-items-center">
                  <button className="btn bg-info text-white text-base m-auto">
                    See More
                  </button>
                </div>
              </div>
            </div>
        </div>
    );
}
