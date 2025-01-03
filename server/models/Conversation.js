import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema({
    participants: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        }
    ],
    messages: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Message"
        }
    ]
});

const Conversation = mongoose.model("Conversation", conversationSchema);
export default Conversation;

/*  participants arrays is an array of all the users participating in the conversation
    messages array is an array of all the messages in the conversation
*/