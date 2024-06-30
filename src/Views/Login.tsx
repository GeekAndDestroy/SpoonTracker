

type LogInProps = { logUserIn: () => void };

export default function LogIn({ logUserIn }: LogInProps) {
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

                    <label className="label">
                        <span className="label-text">Username</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Username"
                        className="input input-bordered"
                    />
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input
                        type="password"
                        placeholder="Password"
                        className="input input-bordered"
                    />

                    <button className="btn my-8 mx-auto py-8 px-16 content-center btn-outline w-1/2">
                        Log In
                    </button>
                    <a href="/signup" className="text-center">
                        Need an account? Sign Up
                    </a>
                </form>
            </div>
        </div>
    );
}
