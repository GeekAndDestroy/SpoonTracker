import dashboard from "../assets/icons/dashboard.svg";
import insight from "../assets/icons/insight.svg";
import exports from "../assets/icons/exports.svg";
import settings from "../assets/icons/settings.svg";

type NavigationProps = {

    logUserOut: () => void;
};

export default function Navigation({ logUserOut }: NavigationProps) {
    return (
        <div className="flex drawer drawer-open navbar bg-info w-full  justify-center sticky inset-x-0 top-0 z-50">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

            {/* <div className="drawer-content flex flex-col items-center justify-center">
                
                <label
                    htmlFor="my-drawer-2"
                    className="btn btn-primary drawer-button lg:hidden"
                >
                    Open drawer
                </label>
            </div> */}

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
                <div className="grid grid-cols-1 h-4/5 justify-center">
                    <div className="flex flex-wrap justify-center">
                        <div className="flex w-full justify-center">
                            <ul className="menu bg-info text-white ">
                                {/* Sidebar content here */}
                                <li>
                                    <a href="/">
                                        <img src={dashboard}></img><p className="hidden md:block">Dashboard</p>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <img src={insight}></img><p className="hidden md:block">Insights</p>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <img src={exports}></img><p className="hidden md:block">Share/Export</p>
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
                                        <img src={settings}></img><p className="hidden md:block">Settings</p>
                                    </a>
                                </li>
                                <li>
                                    <a onClick={logUserOut}>
                                        <img
                                            src={exports}
                                            className="rotate90"
                                        ></img>
                                        <p className="hidden md:block">Log Out</p>
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
