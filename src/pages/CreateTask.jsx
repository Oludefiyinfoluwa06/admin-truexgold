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

    const handleCreateTask = async (e) => {
        e.preventDefault();

        await createTask(title, description, reward);
        navigate('/tasks');
    }
    
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-r from-blue-900 to-blue-400">
            <Navbar title='Create task' />

            <form className="bg-white max-w-lg mx-auto p-8 rounded-lg shadow-md" onSubmit={handleCreateTask}>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
                    <div className="w-full sm:w-1/2">
                    <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">Title</label>
                    <input 
                        type="text" 
                        id="title" 
                        value={title} 
                        onChange={e => setTitle(e.target.value)} 
                        className="w-full bg-gray-200 rounded-md p-2 outline-none focus:border-blue-500"
                    />
                    </div>
                    <div className="w-full sm:w-1/2">
                    <label htmlFor="reward" className="block text-gray-700 font-semibold mb-2">Reward</label>
                    <input 
                        type="text" 
                        id="reward" 
                        value={reward} 
                        onChange={e => setReward(e.target.value)} 
                        className="w-full bg-gray-200 rounded-md p-2 outline-none focus:border-blue-500"
                    />
                    </div>
                </div>
                <div className="flex flex-col mt-4">
                    <label htmlFor="description" className="block text-gray-700 font-semibold mb-2">Description</label>
                    <textarea 
                    id="description" 
                    value={description} 
                    onChange={e => setDescription(e.target.value)} 
                    className="w-full bg-gray-200 rounded-lg p-2 outline-none focus:border-blue-500 h-32"
                    />
                </div>
                <div className="flex items-center justify-center mt-6">
                    <Button text="Submit" />
                </div>
            </form>

            <Link to='/tasks' className='flex items-center justify-center mt-4'>
                <button className='flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-900 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'>View all tasks</button>
            </Link>

            <LogoutBtn />
        </div>
    );
}