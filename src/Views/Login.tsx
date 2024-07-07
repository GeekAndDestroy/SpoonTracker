import { useState } from "react";
import { UserFormDataType } from "../types";
import eye from "../assets/icons/eye.svg";
import eyeoff from "../assets/icons/eyeoff.svg";


type LogInProps = { logUserIn: () => void };

export default function LogIn({  }: LogInProps) {

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

    return (
        <div className="w-full place-content-center">
            <div className="grid grid-cols-1 mt-16 mb-8 mx-auto place-items-center w-10/12">
                <h1 className="text-5xl font-extrabold">Spork</h1>
                <h3 className="text-2xl font-bold">
                    Become a more effective spoonie
                </h3>
            </div>

            <div className="w-1/2 mx-auto">
                <form className="form-control">
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
                    <a href="/signup" className="text-center link">
                        Need an account? Sign Up
                    </a>
                </form>
            </div>
        </div>
    );
}
