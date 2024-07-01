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

function App() {
    const location = useLocation();
    const navigate = useNavigate();

    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
        localStorage.getItem("token") ? true : false
    );

    const [loggedInUser, setLoggedInUser] = useState<Partial<UserType>>({
        email: "",
        first_name: "",
        last_name: "",
        token: "",
        user_id: NaN,
    });

    // useEffect(() => {
    //   if (!isLoggedIn && location.pathname !== '/signup' && location.pathname !== '/login') {
    //     navigate('/intro');
    //   }
    // }, [location.pathname]);

    // useEffect(() => {
    //   async function getLoggedInUser(){
    //     if (isLoggedIn){
    //       setLoggedInUser({
    //         email: localStorage.getItem('email')!,
    //         first_name: localStorage.getItem('first_name')!,
    //         last_name: localStorage.getItem('last_name')!,
    //         token: localStorage.getItem('token')!,
    //         user_id: parseInt(localStorage.getItem('user_id')!),
    //         is_admin: Boolean(localStorage.getItem('is_admin')!)
    //       })
    //     }
    //   }
    //   getLoggedInUser();
    // }, [isLoggedIn])

    const logUserIn = () => {
        setIsLoggedIn(true);
    };

    const logUserOut = () => {
        setIsLoggedIn(false);
        // localStorage.clear();
        localStorage.removeItem("token");
        localStorage.removeItem("email");
        localStorage.removeItem("first_name");
        localStorage.removeItem("last_name");
        localStorage.removeItem("user_id");
        localStorage.removeItem("is_admin");
        setLoggedInUser({
            email: "",
            first_name: "",
            last_name: "",
            token: "",
            user_id: NaN,
        });
        navigate("/login");
    };

    return (
        <>
            {isLoggedIn && (
                <Navigation isLoggedIn={isLoggedIn} logUserOut={logUserOut} />
            )}



            <Routes>
                <Route
                    path="/intro"
                    element={<Intro />}
                />
                <Route
                    path="/"
                    element={<Home currentUser={loggedInUser as UserType} />}
                />
                <Route
                    path="/profile"
                    element={<Profile currentUser={loggedInUser as UserType} />}
                />
                <Route path="/signup" element={<SignUp />} />
                <Route
                    path="/login"
                    element={<LogIn logUserIn={logUserIn} />}
                />
            </Routes>
        </>
    );
}

export default App;
