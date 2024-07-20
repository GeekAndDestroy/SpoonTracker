import { useState } from "react";
import { UserLoginDataType, UserFormDataType } from "../types";
import { useNavigate } from "react-router-dom";
import eye from "../assets/icons/eye.svg";
import eyeoff from "../assets/icons/eyeoff.svg";
import { login } from "../lib/apiWrapper";


type LogInProps = { logUserIn: () => void };

export default function LogIn({ logUserIn }: LogInProps) {

    const navigate = useNavigate();

    const [userFormData, setUserFormData] = useState<Partial<UserFormDataType>>(
        {
            email: "",
            password: ""
        }
    );

    const [seePassword, setSeePassword] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserFormData({ ...userFormData, [e.target.name]: e.target.value });
    };

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("userFormData before login", userFormData);

        const body = {
            email: userFormData.email,
            password: userFormData.password,
        };

        console.log("body before login", body);

        let response = await login(body as UserLoginDataType);
        if (response.error) {
            console.log(response);
            console.log(response.error);
        } else {
            let newUser = response.data!;
            console.log("success", newUser);
            localStorage.setItem("token", newUser.token);
            localStorage.setItem("email", newUser.user_data.email);
            localStorage.setItem("first_name", newUser.user_data.first_name);
            localStorage.setItem("last_name", newUser.user_data.last_name);
            localStorage.setItem("user_id", newUser.user_data.id);
            localStorage.setItem("profile_pic", newUser.user_data.profile_pic);
            localStorage.setItem("spoons", newUser.user_data.spoons);
            logUserIn();
            navigate('/');
        }
    }

    return (
        <div className="w-full place-content-center">
            <div className="grid grid-cols-1 mt-16 mb-8 mx-auto place-items-center w-10/12">
                <h1 className="text-5xl font-extrabold">Spork</h1>
                <h3 className="text-2xl font-bold">
                    Become a more effective spoonie
                </h3>
            </div>

            <div className="w-1/2 mx-auto">
                <form className="form-control" onSubmit={handleFormSubmit}>
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={userFormData.email}
                        onChange={handleInputChange}
                        className="input input-bordered m-2"
                    />
                    <label  className="input input-bordered flex items-center  m-2">
                        <input
                            // type='password'
                            type={seePassword ? 'text' : 'password'}
                            name="password"
                            placeholder="Password"
                            value={userFormData.password}
                            onChange={handleInputChange}
                            className="grow"
                        />
                        <img src={seePassword ? eye : eyeoff } onClick={() => setSeePassword(!seePassword)} />
                    </label>
                    <button className="btn my-8 mx-auto py-8 px-16 content-center bg-info text-white w-1/2">
                        Log In
                    </button>
                </form>
                    <a href="/signup" className="text-center link">
                        Need an account? Sign Up
                    </a>
            </div>
        </div>
    );
}
