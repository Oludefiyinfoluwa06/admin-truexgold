import { useState } from 'react';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import LogoutBtn from '../components/LogoutBtn';
import { useAdmin } from '../contexts/useAdmin';
import { Link, useNavigate } from 'react-router-dom';

export default function CreateTask() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [reward, setReward] = useState('');
    
    const { createTask } = useAdmin();
    const navigate = useNavigate();

    const handleCreateTask = async () => {
        await createTask(title, description, reward);
        navigate('/')
    }
    
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-r from-blue-900 to-blue-400">
            <Navbar title='Create task' />

            <form className='bg-white w-[600px] mx-auto p-[40px] rounded' onSubmit={handleCreateTask}>
                <div className='flex justify-between'>
                    <div>
                        <label htmlFor="title">Title</label>
                        <input 
                            type="text" 
                            id="title" 
                            value={title} 
                            onChange={e => setTitle(e.target.value)} 
                            className='w-full bg-[#A4A0A0] rounded-md p-2 py-1 outline-none'
                        />
                    </div>
                    <div>
                        <label htmlFor="reward">Reward</label>
                        <input 
                            type="text" 
                            id="reward" 
                            value={reward} 
                            onChange={e => setReward(e.target.value)} 
                            className='w-full bg-[#A4A0A0] rounded-md p-2 py-1 outline-none'
                        />
                    </div>
                </div>
                <div className='flex flex-col justify-center items-start mt-2'>
                    <label htmlFor="description">Description</label>
                    <textarea id='description' onChange={e => setDescription(e.target.value)} className='mt-1 w-full bg-[#A4A0A0] outline-none p-2 rounded-lg'>{description}</textarea>
                </div>

                <div className='flex items-center justify-center mt-[20px]'>
                    <Button text='Submit' />
                </div>
            </form>

            <Link to='/tasks' className='flex items-center justify-center mt-4'>
                <button className='flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-900 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'>View all tasks</button>
            </Link>

            <LogoutBtn />
        </div>
    );
}