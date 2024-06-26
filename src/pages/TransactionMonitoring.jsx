import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { useAdmin } from '../contexts/useAdmin';

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

            <table>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Coins</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <div key={user._id}>
                            <tr>
                                <td>{user.username}</td>
                                <td>{user.totalCoins}</td>
                            </tr>
                        </div>
                    ))}
                </tbody>
            </table>
        </div>
    );
}