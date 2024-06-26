import { useEffect } from "react";
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import { useAdmin } from "../contexts/useAdmin";

import coin from '../assets/truexgold-logo2.png';

export default function AllTasks() {
    const { fetchTasks, tasks, deleteTask } = useAdmin();

    useEffect(() => {
        const getTasks = async () => {
            fetchTasks();
        }

        getTasks();
    }, [fetchTasks]);

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-r from-blue-900 to-blue-400">
            <Navbar title="Tasks created" />
            
            <div className="overflow-x-auto">
                {tasks.length > 0 ? (
                    <table className="min-w-full bg-white border border-gray-200">
                        <thead>
                            <tr className="bg-blue-900 text-white">
                                <th className="py-2 px-4 text-left">Title</th>
                                <th className="py-2 px-4 text-left">Reward</th>
                                <th className="py-2 px-4 text-left">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tasks.map(task => (
                                <tr key={task._id} className="border-t border-gray-200 hover:bg-gray-100">
                                    <td className="py-2 px-4">{task.title}</td>
                                    <td className="py-2 px-4 flex items-center gap-1">
                                        <img src={coin} alt="coin" className="w-4 h-4" />
                                        <p>{task.reward}</p>
                                    </td>
                                    <td className="py-2 px-4">
                                        <button
                                        className="flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-900 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                        onClick={async () => await deleteTask(task._id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <div>
                        <h3 className='flex items-center justify-center mt-3 text-2xl'>There are no tasks</h3>
                        <Link to='/create-task' className='mt-2 flex items-center justify-center'>
                            <button className="flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-900 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Create task</button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}