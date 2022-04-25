import {userServices} from '../services/userServices';
import {useEffect, useState} from 'react'
import {
    useNavigate,
  } from "react-router-dom";
function ChatBox() {
    let navigate = useNavigate();
    let textUser = 'text-right'
    const [message, setMessage] = useState('')
    const [dataMess, setDataMess] = useState([])
    const [data, setData] = useState([])
    const [id, setId] = useState(0)
    
    const handlerLogOut = () => {
        localStorage.removeItem('token')
        navigate('/')
    }
    const handlerText = (e) => {
        setMessage(e.target.value)
    }
    async function handlerSend() {
        if(message.length === '') {
            alert('Không được gửi rỗng')
            return
        }
        try{
            await userServices.postMess({
                message: message
            })
            console.log(data)
            console.log(dataMess)
            setMessage('')

        } catch (e) {
            alert(e)
        }
    }
    async function handlerMess() {
        try{
            const res = await userServices.getMess();
            setDataMess(res.data.messages.reverse())
        } catch (e) {
            alert(e)
        }
    }

    async function handlerUser() {
        try{
            const res = await userServices.getUser();
            setData(res.data)
            setId(res.data.id)
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        if(!localStorage.getItem('token')) {
            navigate('/')
        }
        handlerUser()
        handlerMess()
        let time = setInterval(() => {
            handlerUser()
            handlerMess()
        }, 2000)
        return () => {
            clearInterval(time)
        }
    }, [])
    return (
        <div>
       
            <div className="container mx-auto shadow-lg rounded-lg mt-20">
             
                <div className="px-5 py-5 flex justify-between items-center bg-white border-b-2">
                    <div className="font-semibold text-2xl">CY Front-end</div>
                    
                    <button
                        onClick={handlerLogOut}
                        className="h-12 w-12 text-sm p-2 bg-yellow-500 rounded-full text-white font-semibold flex items-center justify-center"
                    >
                        Log out
                    </button>
                </div>
                
                <div className="flex flex-row justify-between bg-white">
                    <div className="w-full px-5 flex flex-col justify-between">
                        <div className="flex  flex-col mt-5">
                            {dataMess.map((item, index) => {
                                return (
                                    <div key={index} className="my-1">
                                        <p className={item.user_id === id ? textUser : 'none'}>{item.message}</p>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="py-5 relative">
                            <input
                                onChange={e => handlerText(e)}
                                className="w-full bg-gray-300 py-5 px-3 rounded-xl"
                                type="text"
                                placeholder="type your message here..."
                                value={message}
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