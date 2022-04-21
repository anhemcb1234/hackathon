import {userServices} from '../services/userServices';
import {useState} from 'react'
import { Link } from "react-router-dom";
import {
    useNavigate,
  } from "react-router-dom";
function ChatBox() {
    let navigate = useNavigate();
    const [message, setMessage] = useState('')
    const handlerText = (e) => {
        setMessage(e.target.value)
    }
    async function handlerSend() {
        try{
            await userServices.postMess({
                message: message
            })
            setMessage('')
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div>
       
            <div className="container mx-auto shadow-lg rounded-lg">
             
                <div className="px-5 py-5 flex justify-between items-center bg-white border-b-2">
                    <div className="font-semibold text-2xl">GoingChat</div>
                    <div className="w-1/2">
                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder="search IRL"
                            className="rounded-2xl bg-gray-100 py-3 px-5 w-full"
                        />
                    </div>
                    <div
                        className="h-12 w-12 p-2 bg-yellow-500 rounded-full text-white font-semibold flex items-center justify-center"
                    >
                        RA
                    </div>
                </div>
                
                <div className="flex flex-row justify-between bg-white">
                   

                    <div className="w-full px-5 flex flex-col justify-between">
                        <div className="flex h-screen flex-col mt-5">
                            <div className="flex justify-end mb-4">
                                <div
                                    className="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white"
                                >
                                    Welcome to group everyone !
                                </div>
                                <img
                                    src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                                    className="object-cover h-8 w-8 rounded-full"
                                    alt=""
                                />
                            </div>
                            <div className="flex justify-start mb-4">
                                <img
                                    src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                                    className="object-cover h-8 w-8 rounded-full"
                                    alt=""
                                />
                                <div
                                    className="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white"
                                >
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                                    at praesentium, aut ullam delectus odio error sit rem. Architecto
                                    nulla doloribus laborum illo rem enim dolor odio saepe,
                                    consequatur quas?
                                </div>
                            </div>


                        </div>
                        <div className="py-5 relative">
                            <input
                                onChange={e => handlerText(e)}
                                className="w-full bg-gray-300 py-5 px-3 rounded-xl"
                                type="text"
                                placeholder="type your message here..."
                            />
                            <button onClick={handlerSend} className="bg-blue-500 absolute right-5 bottom-8 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Send
                            </button>

                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default ChatBox;