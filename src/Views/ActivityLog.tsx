import { UserType } from "../types";
import PageHeader from "../Components/PageHeader";


type HomeProps = { currentUser: UserType };

export default function Home({ currentUser }: HomeProps) {
    return (
        <div className="col-span-4 lg:col-span-8 p-4">
            <PageHeader  currentUser={currentUser}/>
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
                                {/* row 1 */}
                                <tr className="hover">
                                    <td>June 30th</td>
                                    <td>10 am</td>
                                    <td className="text-semibold text-lg">Shower</td>
                                    <td>3 Spoons consumed</td>
                                    <td>“Felt a little harder to do this time around”</td>
                                    <td>...</td>
                                </tr>
                                {/* row 2 */}
                                <tr className="hover">
                                    <td>June 30th</td>
                                    <td>11 am</td>
                                    <td className="text-semibold text-lg">Brush Teeth</td>
                                    <td>1 Spoons consumed</td>
                                    <td>“Felt a little harder to do this time around”</td>
                                    <td>...</td>
                                </tr>
                                {/* row 3 */}
                                <tr className="hover">
                                    <td>June 30th</td>
                                    <td>2 pm</td>
                                    <td className="text-semibold text-lg">Groceries</td>
                                    <td>6 Spoons consumed</td>
                                    <td>“Felt a little harder to do this time around”</td>
                                    <td>...</td>
                                </tr>
                                <tr className="hover">
                                    <td>June 30th</td>
                                    <td>4 pm</td>
                                    <td className="text-semibold text-lg">Ate</td>
                                    <td>2 Spoons consumed</td>
                                    <td>“Felt a little harder to do this time around”</td>
                                    <td>...</td>
                                </tr>
                                
                               
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
