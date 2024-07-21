import { useEffect, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

import "./App.css";
import Home from "./Views/Home";
import SignUp from "./Views/SignUp";
import { UserType } from "./types";
import Profile from "./Views/Profile";
import Navigation from "./Components/Navigation";
import Intro from "./Views/Intro";
import LogIn from "./Views/Login";
import ActivityLog from "./Views/ActivityLog";
// import { updateUserById } from "./lib/apiWrapper";

function App() {
    const location = useLocation();
    const navigate = useNavigate();

    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
        localStorage.getItem("token") ? true : false
    );

    // const [loggedInUser, setLoggedInUser] = useState<Partial<UserType>>({
    //     email: "",
    //     first_name: "",
    //     last_name: "",
    //     token: "",
    //     user_id: NaN,
    //     spoons: NaN,
    //     profile_pic: "",
    // });

    const [loggedInUser, setLoggedInUser] = useState<Partial<UserType>>({
        email: localStorage.getItem("email") || "",
        first_name: localStorage.getItem("first_name") || "",
        last_name: localStorage.getItem("last_name") || "",
        token: localStorage.getItem("token") || "",
        user_id: parseInt(localStorage.getItem("user_id")!) || NaN,
        spoons: parseInt(localStorage.getItem("spoons")!) || NaN,
        profile_pic: localStorage.getItem("profile_pic") || "",
    });

    // const user: Partial<UserType> = {
    //     email: localStorage.getItem("email")!,
    //     first_name: localStorage.getItem("first_name")!,
    //     last_name: localStorage.getItem("last_name")!,
    //     token: localStorage.getItem("token")!,
    //     user_id: parseInt(localStorage.getItem("user_id")!),
    //     profile_pic: localStorage.getItem("profile_pic")!,
    //     spoons: parseInt(localStorage.getItem("spoons")!),
    // };

    // setLoggedInUser(user);

    // useEffect(() => {
    //     const user: Partial<UserType> = {
    //         email: localStorage.getItem("email")!,
    //         first_name: localStorage.getItem("first_name")!,
    //         last_name: localStorage.getItem("last_name")!,
    //         token: localStorage.getItem("token")!,
    //         user_id: parseInt(localStorage.getItem("user_id")!),
    //         profile_pic: localStorage.getItem("profile_pic")!,
    //         spoons: parseInt(localStorage.getItem("spoons")!),
    //     };
    
    //     setLoggedInUser(user);
    // }
    // , [isLoggedIn]);

    // console.log("Logged in user after lonely getLoggedInUser():", loggedInUser);

    // (() => {
    //         const user: Partial<UserType> = {
    //         email: localStorage.getItem("email")!,
    //         first_name: localStorage.getItem("first_name")!,
    //         last_name: localStorage.getItem("last_name")!,
    //         token: localStorage.getItem("token")!,
    //         user_id: parseInt(localStorage.getItem("user_id")!),
    //         profile_pic: localStorage.getItem("profile_pic")!,
    //         spoons: parseInt(localStorage.getItem("spoons")!),
    //     };
    
    //     setLoggedInUser(user);
    
    //     console.log("Logged in user after lonely getLoggedInUser():", loggedInUser);}
    //     )

    useEffect(() => {
        if (
            !isLoggedIn &&
            location.pathname !== "/signup" &&
            location.pathname !== "/login"
        ) {
            navigate("/intro");
        }
    }, [location.pathname, isLoggedIn, navigate]);

    useEffect(() => {
        if (
            isLoggedIn &&
            (location.pathname === "/signup" ||
             location.pathname === "/login" ||
             location.pathname === "/intro")
        ) {
            navigate("/");
        }
    }, [location.pathname, isLoggedIn, navigate]);

    // useEffect(() => {
    //     function getLoggedInUser() {
    //         if (isLoggedIn) {
    //             setLoggedInUser(user);
    //             console.log("Logged in user after getLoggedInUser():", loggedInUser);
    //         }
    //     }
    //     getLoggedInUser();
    // }, [isLoggedIn]);


    // (() => { setLoggedInUser({
    //     email: localStorage.getItem("email")!,
    //     first_name: localStorage.getItem("first_name")!,
    //     last_name: localStorage.getItem("last_name")!,
    //     token: localStorage.getItem("token")!,
    //     user_id: parseInt(localStorage.getItem("user_id")!),
    //     profile_pic: localStorage.getItem("profile_pic")!,
    //     spoons: parseInt(localStorage.getItem("spoons")!),
    // });
    // console.log("Logged in user after getLoggedInUser():", loggedInUser); }
    // )

    // useEffect(() => {
    //     if (isLoggedIn) {
    //         (() => {
    //             const user = {
    //                 email: localStorage.getItem("email")!,
    //                 first_name: localStorage.getItem("first_name")!,
    //                 last_name: localStorage.getItem("last_name")!,
    //                 token: localStorage.getItem("token")!,
    //                 user_id: parseInt(localStorage.getItem("user_id")!),
    //                 profile_pic: localStorage.getItem("profile_pic")!,
    //                 spoons: parseInt(localStorage.getItem("spoons")!),
    //             };
    //             setLoggedInUser(user);
    //         })();
    //         console.log("Logged in user after getLoggedInUser():", loggedInUser);
    //     }
    // }, [isLoggedIn]);


    
    const logUserIn = () => {
        setIsLoggedIn(true);
    };

    const logUserOut = () => {
        setIsLoggedIn(false);
        localStorage.removeItem("token");
        localStorage.removeItem("email");
        localStorage.removeItem("first_name");
        localStorage.removeItem("last_name");
        localStorage.removeItem("user_id");
        localStorage.removeItem("profile_pic");
        localStorage.removeItem("spoons");
        setLoggedInUser({
            email: "",
            first_name: "",
            last_name: "",
            token: "",
            user_id: NaN,
        });
        navigate("/intro");
    };



    return (
        <>
            {isLoggedIn ? (
                <div className="grid grid-cols-5 lg:grid-cols-9">
                    <div className="col-span-1">
                        <Navigation logUserOut={logUserOut} />
                    </div>
                    <Routes>
                        <Route path="/" element={<Home currentUser={loggedInUser as UserType} />} />
                        <Route path="/profile" element={<Profile currentUser={loggedInUser as UserType} />} />
                        <Route path="/activitylog" element={<ActivityLog currentUser={loggedInUser as UserType} />} />
                    </Routes>
                </div>
            ) : (
                <Routes>
                    <Route path="/intro" element={<Intro />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/login" element={<LogIn logUserIn={logUserIn} />} />
                </Routes>
            )}
        </>
    );
}

export default App;
