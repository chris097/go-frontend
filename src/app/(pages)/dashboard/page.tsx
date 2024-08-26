"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

const Dashboard = () => {
    const router = useRouter();
    return (
        <div className='flex min-h-screen flex-col items-center p-24'>
            <div className='w-[400px] mb-5 text-xs'><button onClick={() => router.back()}>Go Back</button></div>
            <div className='flex my-6 justify-between w-[600px]'>
                <h1 className='text-xl font-semibold'>Blog List</h1>
                <button className='bg-red-700/80 p-2 w-[100px] text-center rounded-lg text-white text-sm' value='Search'>Create Blog</button>
            </div>

            <div className='flex gap-2 justify-center items-center'>
                <input placeholder='Search by name' className='border w-[300px] h-10 rounded-full px-4 text-black focus:border-0 outline-none' type='search' />
                <div className='border-gray-700 border p-2 w-[100px] text-center rounded-md text-black text-sm'>Filter</div>
            </div>

            <div className='w-[600px] grid grid-cols-3 gap-4 mt-6'>
                <div className='bg-white w-full h-auto rounded-md p-3'>
                    <h1 className='text-sm font-bold'>Hello World</h1>
                    <p className='text-sm my-3'>Hi World, isn't fair at all to be broke</p>
                    <div className='flex gap-2 mt-3'>
                        <button className='border-gray-700 border hover:opacity-80 p-1 w-[100px] text-center rounded-full text-black text-sm'>Edit</button>
                        <button className='bg-red-700 p-1 hover:opacity-80 w-[100px] text-center rounded-full text-white text-sm'>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard