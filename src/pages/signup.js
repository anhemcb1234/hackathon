import {userServices} from '../services/userServices'
import {useState} from 'react';

function SignUp() {
    const [name, setName] = useState('');
    const [Fname, setFName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');

    const handlerName = (e) => {
        setName(e.target.value)
    }
    const handlerFullName = (e) => {
        setFName(e.target.value)
    }
    const handlerPhone = (e) => {
        setPhone(e.target.value)
    }
    const handlerEmail= (e) => {
        setEmail(e.target.value)
    }
    const handlerPass= (e) => {
        setPass(e.target.value)
    }
    const handlerConfirmPass= (e) => {
        setConfirmPass(e.target.value)
    }
    async function handlerSubmit() {
        try{
            console.log(1)
        } catch(e) {
            alert(e)
        }
    }
    return (
        <>
            <div className="font-sans">
                <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 ">
                    <div className="relative sm:max-w-sm w-full">
                        <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6">
                        </div>
                        <div className="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
                        <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
                            <label className="block mt-3 text-sm text-gray-700 text-center font-semibold">
                                Sign Up
                            </label>
                            <form method="" action="" className="mt-10">

                                <div>
                                    <input onChange={e => handlerName(e)} type="text" placeholder="Name"
                                           className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"/>
                                </div>

                                <div className="mt-7">
                                    <input onChange={e => handlerFullName(e)} type="text" placeholder="Full name"
                                           className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"/>
                                </div>

                                <div className="mt-7">
                                    <input onChange={e => handlerPhone(e)} type="number" placeholder="Phone number"
                                           className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"/>
                                </div>

                                <div className="mt-7">
                                    <input onChange={e => handlerEmail(e)} type="email" placeholder="Email"
                                           className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"/>
                                </div>

                                <div className="mt-7">
                                    <input onChange={e => handlerPass(e)} type="password" placeholder="Password"
                                           className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"/>
                                </div>

                                <div className="mt-7">
                                    <input onChange={e => handlerConfirmPass(e)} type="password" placeholder="Confirm password"
                                           className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"/>
                                </div>


                                <div className="mt-7">
                                    <button
                                        onClick={handlerSubmit}
                                        className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                        Register
                                    </button>
                                </div>

                                <div className="flex mt-7 items-center text-center">
                                    <div className="border-gray-300 border-1 w-full rounded-md">
                                        <label className="block font-medium text-sm text-gray-600 w-full">
                                            Sign up
                                        </label>
                                        <div className="border-gray-300 border-1 w-full rounded-md"></div>
                                    </div>
                                </div>

                                <div className="mt-7">
                                    <div className="flex justify-center items-center">
                                        <label className="mr-2">You have an account?</label>
                                        <a divef="#"
                                           className=" text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"/>
                                        Login
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

export default SignUp;