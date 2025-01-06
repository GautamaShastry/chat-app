import React from 'react'   
import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messages/MessageContainer'

const Home = () => {
    return (
    <div className='flex items-center justify-center min-h-screen bg-cover bg-center'>
        <div className='flex w-full max-w-5xl sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-xl'>
            <Sidebar />
            <MessageContainer />
        </div>
    </div>
    )
}

export default Home
