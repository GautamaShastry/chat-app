import {create} from "zustand";

const useConversation = create((set) => ({
    selectedConversation: null, // state
    setSelectedConversation: (selectedConversation) => set({selectedConversation}),  //setter function
    messages: [],
    setMessages: (messages) => set({messages})
}));

export default useConversation;

/*
It is a small state management library..just like redux but on much smaller scale. 
messages and selected conversations are the states managed on zustand

*/