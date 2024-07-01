type IntroProps = {};

export default function Intro({}: IntroProps) {
    return (
        <>
            <div className="navbar bg-base-100 w-full">
                <div className="flex-1 w-full">
                    <a className="btn btn-ghost text-xl">SPORK LOGO</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <a>About</a>
                        </li>
                        <li>
                            <a>FAQ</a>
                        </li>
                        <li>
                            <a href="../login">Log In</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="w-9/12 mx-auto">
                <div className="grid grid-cols-1 mt-16 place-items-start w-10/12">
                    <h1 className="text-5xl font-extrabold">Spork</h1>
                    <h3 className="text-2xl font-bold">
                        Become a more effective spoonie
                    </h3>
                    <p className="text-lg text-left mt-8 w-3/4">
                        Our mission is to help those with chronic and mental
                        illness better manage their energy based on spoon theory.
                    </p>
                    <a href="../signup">
                    <button className="btn mt-16 py-8 px-16 content-center btn-outline">
                        Sign Up
                    </button>
                    </a>
                </div>

                <div className="grid grid-cols-3 gap-24 mt-16">
                    <div className="card bg-base-100 ">
                        <figure className="pt-10">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                                alt="Shoes"
                                className=""
                            />
                        </figure>
                        <div className="card-body items-center text-left">
                            <p className="text-lg">Track and manage your energy</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 ">
                        <figure className="pt-10">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                                alt="Shoes"
                                className=""
                            />
                        </figure>
                        <div className="card-body items-center text-left">
                            <p className="text-lg">View in-depth insights and recommendations</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 ">
                        <figure className="pt-10">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                                alt="Shoes"
                                className=""
                            />
                        </figure>
                        <div className="card-body items-center text-left">
                            <p className="text-lg">Share discoveries with those around you</p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 mt-16 place-items-start">
                    <h3 className="text-2xl font-bold">
                        What is spoon theory and how can you apply it?
                    </h3>
                    <p className="text-lg text-left mt-8 mb-32">
                        Lorem ipsum dolor sit amet consectetur. Ac egestas
                        vestibulum varius sapien gravida aenean orci at purus.
                        Eu tincidunt facilisis at vitae malesuada orci. Hac non
                        ut vitae cursus. Et hac dapibus rutrum aliquam vel duis
                        arcu sagittis. Viverra neque pellentesque sed sed ornare
                        risus maecenas. Nunc magna sagittis ridiculus gravida
                        lorem aliquam. Tristique amet facilisi pharetra quis
                        rhoncus justo.
                    </p>
                </div>
            </div>
        </>
    );
}
