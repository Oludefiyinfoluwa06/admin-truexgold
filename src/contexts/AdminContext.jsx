import { createContext, useState } from 'react';
import axios from 'axios';

export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const login = async (username, email, password) => {
        setLoading(true);
        try {
            setLoading(true);
            const response = await axios.post(`https://truex-backend.vercel.app/api/admin/login`, { username, email, password });
            localStorage.setItem('admin', JSON.stringify(response.data.admin));
            localStorage.setItem('admin-token', JSON.stringify(response.data.token));
        } catch (err) {
            setError(err.response.data.message);
        } finally {
            setLoading(false);
        }
    };

    const requestResetCode = async (email) => {
        setLoading(true);

        try {
            setLoading(true);
            const response = await axios.post(`https://truex-backend.vercel.app/api/admin/requestResetCode`, { email });

            console.log(response);
        } catch (err) {
            console.log(err);
            setError(err.response.data.message);
        } finally {
            setLoading(false);
        }
    };

    const resetPassword = async (email, resetCode, newPassword) => {
        setLoading(true);

        try {
            setLoading(true);
            const response = await axios.post(`https://truex-backend.vercel.app/api/admin/resetPassword`, { email, resetCode, newPassword });

            console.log(response);
        } catch (err) {
            console.log(err);
            setError(err.response.data.message);
        } finally {
            setLoading(false);
        }
    };

    const logout = () => {
        localStorage.removeItem('admin');
        localStorage.removeItem('admin-token');
    };

    const createTask = async (title, description, reward) => {
        setLoading(true);

        try {
            const token = JSON.parse(localStorage.getItem('admin-token'));
            const response = await axios.post(
                `https://truex-backend.vercel.app/api/tasks/create`,
                { title, description, reward },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            setTasks([...tasks, response.data.task]);
        } catch (err) {
            setError(err.response.data.message);
        } finally {
            setLoading(false);
        }
    };

    // const editTask = async (taskId, title, description, reward) => {
    //     setLoading(true);

    //     try {
    //         const token = JSON.parse(localStorage.getItem('admin-token'));
    //         const response = await axios.put(
    //             `https://truex-backend.vercel.app/api/tasks/edit/${taskId}`,
    //             { title, description, reward },
    //             { headers: { Authorization: `Bearer ${token}` } }
    //         );
    //         setTasks(tasks.map(task => (task._id === taskId ? response.data.task : task)));
    //     } catch (err) {
    //         setError(err.response.data.message);
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    const deleteTask = async (taskId) => {
        setLoading(true);

        try {
            const token = JSON.parse(localStorage.getItem('admin-token'));
            const response = await axios.delete(
                `https://truex-backend.vercel.app/api/tasks/delete/${taskId}`,
                { headers: { Authorization: `Bearer ${token}` } }
            );
            console.log(response);
            setTasks(tasks.filter(task => task._id !== taskId));
        } catch (err) {
            console.log(err);
            setError(err.response.data.message);
        } finally {
            setLoading(false);
        }
    };

    const fetchTasks = async () => {
        setLoading(true);

        try {
            const response = await axios.get(`https://truex-backend.vercel.app/api/tasks/`);
            console.log(response);
            setTasks(response.data.tasks);
        } catch (err) {
            console.log(err);
            setError(err.response.data.message);
        } finally {
            setLoading(false);
        }
    };

    const fetchUsers = async () => {
        setLoading(true);

        try {
            const token = JSON.parse(localStorage.getItem('admin-token'));
            const response = await axios.get(`https://truex-backend.vercel.app/api/users/`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setUsers(response.data.users);
        } catch (err) {
            setError(err.response.data.message);
        } finally {
            setLoading(false);
        }
    };

    const setEarningLimit = async (newLimit) => {
        setLoading(true);
        
        const limit = parseInt(newLimit);

        try {
            const token = JSON.parse(localStorage.getItem('admin-token'));

            const response = await axios.put(
                `https://truex-backend.vercel.app/api/setting/globalEarningLimit`,
                { limit },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            return response.data;
        } catch (err) {
            setError(err.response.data.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <AdminContext.Provider
            value={{
                tasks,
                users,
                loading,
                error,
                login,
                requestResetCode,
                resetPassword,
                logout,
                createTask,
                // editTask,
                deleteTask,
                fetchTasks,
                fetchUsers,
                setEarningLimit
            }}
        >
            {children}
        </AdminContext.Provider>
    );
};
