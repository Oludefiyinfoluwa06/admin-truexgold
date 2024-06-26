import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import LogoutBtn from '../components/LogoutBtn';
import { useAdmin } from '../contexts/useAdmin';

import coin from '../assets/truexgold-logo2.png';

export default function TransactionMonitoring() {
    const { fetchUsers, users } = useAdmin();
        
    useEffect(() => {
        const getUsers = async () => {
            await fetchUsers();
        }

        getUsers();
    })

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-r from-blue-900 to-blue-400">
            <Navbar title="Transaction Monitoring" />

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                    <tr className="bg-blue-900 text-white">
                        <th className="py-2 px-4 text-left">Username</th>
                        <th className="py-2 px-4 text-left">Coins</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map(user => (
                        <tr key={user._id} className="border-t border-gray-200 hover:bg-gray-100">
                        <td className="py-2 px-4 capitalize">{user.username}</td>
                        <td className="py-2 px-4 flex items-center gap-1">
                            <img src={coin} alt="coin" className="w-4 h-4" />
                            <p>{user.totalCoins}</p>
                        </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            <LogoutBtn />
        </div>
    );
}