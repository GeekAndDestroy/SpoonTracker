import graph from "../assets/icons/graph.svg";
import insight_dark from "../assets/icons/insight_dark.svg";
import customer_insight from "../assets/icons/customer_insight.svg";


type IntroProps = {};

export default function Intro({}: IntroProps) {
    return (
        <>
            <div className="flex justify-center  navbar bg-info w-full text-white h-20">
                <div className="flex justify-center w-10/12">
                <div className="flex-1 w-full">
                    <a className="text-3xl font-bold">Spork</a>
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
            </div>

            <div className="w-10/12 mx-auto">
                <div className="grid grid-cols-5 mt-16 place-items-start ">
                    <div className="col-span-3">
                        <h3 className="text-2xl font-bold">
                        Track and manage your energy to become a more effective Spoonie.
                        </h3>
                        <p className="text-lg text-left mt-4 w-3/4">
                        Our mission is to help those with chronic and mental illness better manage their energy based on spoon theory better manage their energy, anticipate flare-ups, and gain insights to live better.  As well as promote empathy and support from those around you.
                        </p>
                        <a href="../signup">
                            <button className="btn mt-8 py-4 px-16 content-center rounded-none bg-info text-white">
                                Get Started
                            </button>
                        </a>
                    </div>
                    <div className="col-span-2">
                        <img src="../src/assets/images/dashboard.png" className="w-full"/>
                        
                    </div>
                </div>
                </div>

                
                <div className="flex justify-center bg-info w-full text-white my-20 py-12">
                    <div className="w-10/12">
                        <h3 className="text-xl font-semibold mb-4">What is Spoon theory and how can you apply it?</h3>
                        <p>Spoon theory is a simple yet powerful way to understand what it’s like to live with chronic illnesses or mental health challenges. Imagine you start your day with a handful of spoons, each representing a unit of energy. Every activity, from getting out of bed to going to work or spending time with friends, costs you a spoon or more. For "Spoonies," the nickname for those who live by this metaphor, running out of spoons means they can’t do anything more until they rest and recharge. Our app, Spork, helps Spoonies manage their limited energy by tracking daily activities and offering insights to prevent flare-ups. It’s also a tool to help friends and family understand and support their loved ones better. With Spork, you can take control of your day, conserve your spoons, and live with greater ease and understanding.</p>
                        <h3 className="text-xl font-semibold mt-6 mb-4">How do we help?</h3>
                        <p>Spork helps individuals with chronic and mental illnesses manage their energy by providing tools to track daily activities and monitor energy expenditure. By using spoon theory, Spork offers insights to anticipate potential flare-ups and make informed decisions. Our app also promotes empathy and support from friends, family, and caregivers by helping them understand the challenges Spoonies face. With personalized recommendations and alerts, Spork ensures you can live a more balanced and fulfilling life.</p>
                    </div>
                </div>

                <div className="w-10/12 mx-auto">
                    <h3 className="text-2xl font-bold text-left">A few features</h3>
                <div className="grid grid-cols-3 gap-24 mt-8">
                    <div className="card bg-base-100 border-4 ">
                        <figure className="pt-10">
                            <img
                                src={graph}
                                alt="Graph"
                                className=""
                            />
                        </figure>
                        <div className="card-body items-center text-left">
                            <p className="text-lg text-center">Track and manage your energy</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 border-4 ">
                        <figure className="pt-10">
                            <img
                                src={insight_dark}
                                alt="Shoes"
                                className=""
                            />
                        </figure>
                        <div className="card-body items-center text-left">
                            <p className="text-lg text-center">View in-depth insights and recommendations</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 border-4 ">
                        <figure className="pt-10">
                            <img
                                src={customer_insight}
                                alt="Shoes"
                                className=""
                            />
                        </figure>
                        <div className="card-body items-center text-left">
                            <p className="text-lg text-center">Share discoveries with those around you</p>
                        </div>
                    </div>
                </div>   
            </div>
            
            <div className="divider w-full mt-24"></div>

            <div className="flex justify-center mb-24">
            <div className="w-10/12">
                <h3 className="font-semibold">Still curious about Spoon theory?</h3>
                <p className="mt-2"><a href="https://lymphoma-action.org.uk/sites/default/files/media/documents/2020-05/Spoon%20theory%20by%20Christine%20Miserandino.pdf" target="_blank" className="link">The Spoon theory- Christine Miserandino</a> (Created The Spoon theory)</p>
                <p><a href="https://medium.com/@paperstainedink/spoon-theory-in-practise-fbd34ac38d60" target="_blank" className="link">Spoon theory in practice- Lily Calder (Medium)</a></p>
            </div>
            </div>
        </>
    );
}
