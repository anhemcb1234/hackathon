import {authService} from "../service/authService";
import {useState} from "react";
import jwt_decode from "jwt-decode";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [errEmail, setErrEmail] = useState('')
    const [errPassword, setErrPassword] = useState('')
    const handSubmit = async (e) => {
        e.preventDefault();
        if (!email) {
            setErrEmail('Email is required')
            return;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setErrEmail('Email is invalid')
            return;
        } else if (!password) {
            setErrPassword('Password is required')
            return;
        }
        try {
            const res = await authService.doLogin({email, password});
            const token = res.data.token;
            const data = (jwt_decode(token));
            alert(data.email);
            alert(data.password);
            console.log(data);
            console.log(token);
        } catch (e) {
            console.log(e)
        }
        setEmail('');
        setPassword('');
    }
    return (
        <>
            <div className="font-sans">
                <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 ">
                    <div className="relative sm:max-w-sm w-full">
                        <div
                            className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6">
                        </div>
                        <div
                            className="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6">
                        </div>
                        <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
                            <label className="block mt-3 text-sm text-gray-700 text-center font-semibold">
                                Login
                            </label>
                            <form className="mt-10" onSubmit={handSubmit}>
                                <div>
                                    <input type="text" placeholder="Email"
                                           className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                                           onChange={(e) => setEmail(e.target.value)} value={email}/>
                                    <p className="error font-semibold text-red-600">{errEmail}</p>
                                </div>
                                <div className="mt-7">
                                    <input type="password" placeholder="Password"
                                           className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                                           onChange={(e) => setPassword(e.target.value)} value={password}/>
                                    <p className="error font-semibold text-red-600">{errPassword}</p>
                                </div>
                                <div className="mt-7">
                                    <button
                                        type="submit"
                                        className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                        Login
                                    </button>
                                </div>
                                <div className="mt-7">
                                    <div className="flex justify-center items-center">
                                        <label className="mr-2">Do you have an account?</label>
                                        <a href="#"
                                           className=" text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                            Sign up
                                        </a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;