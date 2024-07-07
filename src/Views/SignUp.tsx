import { useState } from "react";
import { UserFormDataType } from "../types";
import eye from "../assets/icons/eye.svg";
import eyeoff from "../assets/icons/eyeoff.svg";


type SignUpProps = {};

export default function SignUp({}: SignUpProps) {
    const [userFormData, setUserFormData] = useState<Partial<UserFormDataType>>(
        {
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            confirm_password: "",
        }
    );

    const [seePassword, setSeePassword] = useState(false);
    const [seeConfirmPassword, setSeeConfirmPassword] = useState(false);

    const disableSubmit =
        (userFormData.password?.length ?? 0) < 5 ||
        userFormData.password !== userFormData.confirm_password;

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
                    <div className="flex w-full">
                        <input
                            type="text"
                            name="first_name"
                            placeholder="First Name"
                            value={userFormData.first_name}
                            onChange={handleInputChange}
                            className="input input-bordered w-1/2 m-2"
                        />
                        <input
                            type="text"
                            name="last_name"
                            placeholder="Last Name"
                            value={userFormData.last_name}
                            onChange={handleInputChange}
                            className="input input-bordered w-1/2 m-2"
                        />
                    </div>
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={userFormData.email}
                        onChange={handleInputChange}
                        className="input input-bordered m-2"
                    />
                    <label  className={userFormData.password !== userFormData.confirm_password ? "input input-bordered flex items-center border-red-500 m-2" : "input input-bordered flex items-center m-2" }>
                        <input
                            // type='password'
                            type={seePassword ? 'text' : 'password'}
                            name="password"
                            placeholder="Password"
                            value={userFormData.password}
                            onChange={handleInputChange}
                            className="grow"
                        />
                        <img src={seePassword ? eyeoff : eye} onClick={() => setSeePassword(!seePassword)} />
                    </label>
                    

                    
                    {/* <label  className="input input-bordered flex items-center border-red-500 m-2"> */}
                    <label  className={userFormData.password !== userFormData.confirm_password ? "input input-bordered flex items-center border-red-500 m-2" : "input input-bordered flex items-center m-2" }>
                        <input
                            // type='password'
                            type={seeConfirmPassword ? 'text' : 'password'}
                            name="confirm_password"
                            placeholder="Confirm Password"
                            value={userFormData.confirm_password}
                            onChange={handleInputChange}
                            className="grow"
                        />
                        <img src={seeConfirmPassword ? eyeoff : eye} onClick={() => setSeeConfirmPassword(!seeConfirmPassword)} />
                    </label>
                    
                    {userFormData.password !== userFormData.confirm_password && <p className="text-red-500 m-2 text-xs">*Passwords do not match</p>}

                    <button className="btn my-8 mx-auto py-8 px-16 content-center bg-info w-1/2 text-white" disabled={disableSubmit}>
                        Sign Up
                    </button>
                    <a href="/login" className="text-center link">
                        Already have an account? Log In
                    </a>
                </form>
            </div>
        </div>
    );
}
