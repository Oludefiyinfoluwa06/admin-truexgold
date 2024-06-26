import { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useAdmin } from "../contexts/useAdmin";

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
            
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Reward</th>
                        <th>Timestamp</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map(task => (
                        <tr key={task._id}>
                            <td>{task.title}</td>
                            <td>{task.reward}</td>
                            <td>{task.timestamp}</td>
                            <td>
                                <button className="flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-900 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" onClick={async () => await deleteTask(task._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}