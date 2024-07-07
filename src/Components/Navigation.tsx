import dashboard from "../assets/icons/dashboard.svg";
import insight from "../assets/icons/insight.svg";
import exports from "../assets/icons/exports.svg";
import settings from "../assets/icons/settings.svg";

type NavigationProps = {
    isLoggedIn: boolean;
    logUserOut: () => void;
};

export default function Navigation({}: NavigationProps) {
    return (
        <div className="drawer drawer-open navbar bg-info w-full">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

            <div className="drawer-content flex flex-col items-center justify-center">
                
                <label
                    htmlFor="my-drawer-2"
                    className="btn btn-primary drawer-button lg:hidden"
                >
                    Open drawer
                </label>
            </div>

            <div className="drawer-side">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold text-white py-12">
                        Spork
                    </h1>
                </div>
                <label
                    htmlFor="my-drawer-2"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                ></label>
                <div className="grid grid-cols-1 h-4/5">
                    <div className="flex flex-wrap">
                        <div>
                            <ul className="menu bg-info text-white w-11/12">
                                {/* Sidebar content here */}
                                <li>
                                    <a href="/">
                                        <img src={dashboard}></img>Dashboard
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <img src={insight}></img>Insights
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <img src={exports}></img>Share/Export
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {/* <div className="grow min-h-full"></div> */}
                        <div className="self-end h-min">
                            <ul className="menu bg-info text-white w-full">
                                {/* Sidebar content here */}

                                <li>
                                    <a>
                                        <img src={settings}></img>Settings
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <img
                                            src={exports}
                                            className="rotate90"
                                        ></img>
                                        Log Out
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
