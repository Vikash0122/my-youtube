import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { useSelector } from "react-redux";
import { generateRandomMessage, generateRandomName } from "../utils/helper";

const LiveChat = () => {
    const [liveMessage, setLiveMessage] = useState("");
    const dispatch = useDispatch();

    const ChatMessages = useSelector((store) => store.chat.messages);

    useEffect(() => {
        const interval = setInterval(() => {
            //API polling
            dispatch(
                addMessage({
                    name: generateRandomName(),
                    message: generateRandomMessage(),
                })
            );
        }, 2000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <>
            <div className="border border-gray-200 rounded-lg w-full h-[500px] bg-slate-100 p-2 overflow-y-scroll flex flex-col-reverse">
                {ChatMessages.map((msg, index) => (
                    <ChatMessage name={msg.name} message={msg.message} key={index} />
                ))}
            </div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    dispatch(addMessage({ name: "Vikash Kumar", message: liveMessage }));
                    setLiveMessage("");
                }}
            >
                <input
                    placeholder="Say something..."
                    className="p-2 border border-gray-200 w-3/4 mt-2 mr-2"
                    value={liveMessage}
                    onChange={(e) => setLiveMessage(e.target.value)}
                />
                <button
                    className="border border-green-100 bg-green-700 p-2 text-white px-4"
                    type="submit"
                >
                    Send
                </button>
            </form>
        </>
    );
};

export default LiveChat;