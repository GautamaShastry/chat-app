import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import Message from "./Message";
import MessageSkeleton from "../skeleton/MessageSkeleton";

const Messages = () => {
    const {messages, loading} = useGetMessages();
    const lastMessageRef = useRef();

    // whenever messages changes(new message arrives) scroll down to the latest message(useEffect is triggered)
    useEffect(() => {
        setTimeout(() => {
            lastMessageRef.current?.scrollIntoView({ behavior: "smooth" }); // automatically scroll down to the latest message
        }, 100);
    }, [messages]);

	return (
		<div className='px-4 flex-1 overflow-auto'>
			{   !loading && 
                messages.length > 0 &&
                messages.map((message) => (
                    <div key={message._id} ref={lastMessageRef}>
                        <Message message={message} />
                    </div>
                ))
            }

            {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)} 
            {!loading && messages.length === 0 && (
                <p className="text-center text-blue-500">Send a message to start the conversation</p>
            )}
		</div>
	);
};

export default Messages;