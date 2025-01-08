import { useState } from "react"
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";

const useSendMessage = () => {
    const [loading, setLoading] = useState(false);
    const {messages, setMessages, selectedConversation} = useConversation();

    const sendMessage = async (message) => {
        setLoading(true);
        try {
            const res = await fetch(`/api/messages/send/${selectedConversation._id}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ message })
            });
            const data = await res.json();
            if(data.error){
                throw new Error(data.error);
            }
            setMessages([...messages, data]); // we have previous messages and then add new messages as well
            /* If you write setMessages({...messages, data}) instead, the Message component will not be rendered */
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };
    return {sendMessage, loading};
};

export default useSendMessage;

/* 
NOTE: Don't use /:${selectedConversation._id} you will be passing a string instead of object ID to your server. You will be getting an error
*/