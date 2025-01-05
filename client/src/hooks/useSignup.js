import React, { useState } from 'react'
import toast from 'react-hot-toast';

const useSignup = () => {

    const [loading, setLoading] = useState(false); // loading state

    const signup = async ({fullName, username, email, password, confirmPassword, gender}) => {
        const success = handleInputErrors({fullName, username, email, password, confirmPassword, gender}); // custom function to handle input errors

        if(!success) return; // in case of errors

        setLoading(true);

        try {
            const res = await fetch("http://localhost:8000/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ fullName, username, email, password, confirmPassword, gender })
            });

            const data = await res.json();
            console.log(data);
        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    }
    return (
        <div>
            
        </div>
    )
}

export default useSignup

function handleInputErrors({fullName, username, email, password, confirmPassword, gender}){
    if(!fullName || !username || !email || !password || !confirmPassword || !gender) {
        toast.error("Please fill all the fields");
        return false;
    }
    if(password !== confirmPassword){
        toast.error("Passwords do not match");
        return false;
    }
    if(password.length < 6) {
        toast.error("Password must be at least 6 characters");
        return false;
    }
    return true;
}
