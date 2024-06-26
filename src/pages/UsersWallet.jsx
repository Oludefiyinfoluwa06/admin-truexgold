import { useEffect } from "react";
import { useAdmin } from "../contexts/useAdmin";
import Navbar from "../components/Navbar";

export default function UsersWallet() {
    const { fetchUsers, users } = useAdmin();
        
    useEffect(() => {
        const getUsers = async () => {
            await fetchUsers();
        }

        getUsers();
    }, [fetchUsers]);

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-r from-blue-900 to-blue-400">
            <Navbar title="View Users' Wallet" />

            <table>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Wallet address</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <div key={user._id}>
                            <tr>
                                <td>{user.username}</td>
                                <td>{user.walletAddress}</td>
                            </tr>
                        </div>
                    ))}
                </tbody>
            </table>
        </div>
    );
}