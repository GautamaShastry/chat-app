
import useConversation from "../../zustand/useConversation";

const Conversation = ({ conversation, lastIdx, emoji }) => {
    const { selectedConversation, setSelectedConversation } = useConversation();

    const isSelected = selectedConversation?._id === conversation._id;


    return (
        <>
            <div
                className={`flex gap-2 items-center p-2 py-1 rounded cursor-pointer transition-all 
                    ${isSelected ? "bg-sky-500" : "hover:bg-sky-500"}
                `}
                onClick={() => setSelectedConversation(conversation)}
            >
                {/* Avatar */}
                <div className='avatar online'>
                    <div className='w-12 rounded-full'>
                        <img
                            src={conversation.profilePicture}
                            alt={conversation.fullName}
                        />
                    </div>
                </div>

                {/* Conversation Info */}
                <div className='flex flex-col flex-1'>
                    <div className='flex justify-between gap-3'>
                        <p className='font-bold text-gray-200'>{conversation.fullName}</p>
                        <span className='text-xl'>{emoji}</span>
                    </div>
                </div>
            </div>

            {/* Divider */}
            {!lastIdx && <div className='divider my-0 py-0 h-1' />}
        </>
    );
};

export default Conversation;
