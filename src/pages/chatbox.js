function ChatBox() {
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
                   
                    <div className="flex flex-col w-2/5 border-r-2 overflow-y-auto">
                     
                        <div className="border-b-2 py-4 px-2">
                            <input
                                type="text"
                                placeholder="search chatting"
                                className="py-2 px-2 border-2 border-gray-200 rounded-2xl w-full"
                            />
                        </div>
                      
                        <div
                            className="flex flex-row py-4 px-2 justify-center items-center border-b-2"
                        >
                            <div className="w-1/4">
                                <img
                                    src="https://source.unsplash.com/_7LbC5J-jw4/600x600"
                                    className="object-cover h-12 w-12 rounded-full"
                                    alt=""
                                />
                            </div>
                            <div className="w-full">
                                <div className="text-lg font-semibold">Luis1994</div>
                                <span className="text-gray-500">Pick me at 9:00 Am</span>
                            </div>
                        </div>
                    </div>

                    <div className="w-full px-5 flex flex-col justify-between">
                        <div className="flex flex-col mt-5">
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
                        <div className="py-5">
                            <input
                                className="w-full bg-gray-300 py-5 px-3 rounded-xl"
                                type="text"
                                placeholder="type your message here..."
                            />
                        </div>
                    </div>

                    <div className="w-2/5 border-l-2 px-5">

                    </div>
                </div>
            </div>
        </div>

    );
}

export default ChatBox;