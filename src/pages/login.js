import {useEffect, useState} from 'react'
import {userServices} from '../services/userServices'
import { Link } from "react-router-dom";
import {
    useNavigate,
  } from "react-router-dom";
function Login() {
    let navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')


    const validate = () => {
        if (!email) {
            alert('Email is required')
            return;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            alert('Email is invalid')
            return;
        } else if (!password) {
            alert('Password is required')   
            return;
        }
    }
    const handSubmit = async (e) => {
        validate()
        try {
            const login = await userServices.postLogin({
                email: email,
                password: password
            })
            localStorage.setItem('token', login.data.token);
            alert("Đăng nhập thành công")
        } catch (e) {
            alert(e)
        }
        setEmail('');
        setPassword('');
    }
    // useEffect(() => {
    //     if(localStorage.getItem('token')) {
            
    //     }
    // })
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
                                <div>
                                    <input type="text" placeholder="Email"
                                           className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                                           onChange={(e) => setEmail(e.target.value)} value={email}/>
                                </div>
                                <div className="mt-7">
                                    <input type="password" placeholder="Password"
                                           className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                                           onChange={(e) => setPassword(e.target.value)} value={password}/>
                                </div>
                                <div className="mt-7">
                                    <button
                                        onClick={handSubmit}
                                        type="submit"
                                        className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                        Login
                                    </button>
                                </div>
                                <div className="mt-7">
                                    <div className="flex justify-center items-center">
                                        <label className="mr-2">Do you have an account?</label>
                                        <Link to="/signup">About</Link>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;