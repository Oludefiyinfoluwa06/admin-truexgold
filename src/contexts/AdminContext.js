import { createContext, useState, useContext } from 'react';
import axios from 'axios';

const AdminContext = createContext();

export const useAdmin = () => {
    return useContext(AdminContext);
};

export const AdminProvider = ({ children }) => {
    const [admin, setAdmin] = useState(null);
    const [tasks, setTasks] = useState([]);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const login = async (username, email, password) => {
        try {
            setLoading(true);
            const response = await axios.post(`https://truex-backend.vercel.app/api/admin/login`, { username, email, password });
            setAdmin(response.data.admin);
            localStorage.setItem('admin', response.data.admin);
            localStorage.setItem('admin-token', response.data.token);
            setLoading(false);
        } catch (err) {
            setError(err.response.data.message);
            setLoading(false);
        }
    };

    const createTask = async (title, description, reward) => {
        try {
            setLoading(true);
            const token = localStorage.getItem('admin-token');
            const response = await axios.post(
                `https://truex-backend.vercel.app/api/tasks/create`,
                { title, description, reward },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            setTasks([...tasks, response.data.task]);
            setLoading(false);
        } catch (err) {
            setError(err.response.data.message);
            setLoading(false);
        }
    };

    const editTask = async (taskId, title, description, reward) => {
        try {
            setLoading(true);
            const token = localStorage.getItem('admin-token');
            const response = await axios.put(
                `https://truex-backend.vercel.app/api/tasks/edit/${taskId}`,
                { title, description, reward },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            setTasks(tasks.map(task => (task._id === taskId ? response.data.task : task)));
            setLoading(false);
        } catch (err) {
            setError(err.response.data.message);
            setLoading(false);
        }
    };

    const deleteTask = async (taskId) => {
        try {
            setLoading(true);
            const token = localStorage.getItem('admin-token');
            await axios.delete(
                `https://truex-backend.vercel.app/api/tasks/delete/${taskId}`,
                { headers: { Authorization: `Bearer ${token}` } }
            );
            setTasks(tasks.filter(task => task._id !== taskId));
            setLoading(false);
        } catch (err) {
            setError(err.response.data.message);
            setLoading(false);
        }
    };

    const fetchTasks = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`https://truex-backend.vercel.app/api/tasks/`);
            setTasks(response.data.tasks);
            setLoading(false);
        } catch (err) {
            setError(err.response.data.message);
            setLoading(false);
        }
    };

    const fetchUsers = async () => {
        try {
            setLoading(true);
            const token = localStorage.getItem('admin-token');
            const response = await axios.get(`https://truex-backend.vercel.app/api/users/`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setUsers(response.data.users);
            setLoading(false);
        } catch (err) {
            setError(err.response.data.message);
            setLoading(false);
        }
    };

    const updateGlobalEarningLimit = async (newLimit) => {
    try {
        setLoading(true);
        const token = localStorage.getItem('admin-token');
        const response = await axios.put(
            `https://truex-backend.vercel.app/api/settings/global-earning-limit`,
            { newLimit },
            { headers: { Authorization: `Bearer ${token}` } }
        );
        setLoading(false);
        return response.data;
    } catch (err) {
        setError(err.response.data.message);
        setLoading(false);
    }
};

    return (
        <AdminContext.Provider
            value={{
                admin,
                tasks,
                users,
                loading,
                error,
                login,
                createTask,
                editTask,
                deleteTask,
                fetchTasks,
                fetchUsers,
                updateGlobalEarningLimit
            }}
        >
            {children}
        </AdminContext.Provider>
    );
};
