import { useEffect } from "react";
import { useAdmin } from "../contexts/useAdmin";
import Navbar from "../components/Navbar";
import LogoutBtn from "../components/LogoutBtn";

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

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr className="bg-blue-900 text-white">
                            <th className="py-2 px-4 text-left">Username</th>
                            <th className="py-2 px-4 text-left">Wallet Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user._id} className="border-t border-gray-200 hover:bg-gray-100">
                                <td className="py-2 px-4 capitalize">{user.username}</td>
                                <td className="py-2 px-4">{user.walletAddress ? user.walletAddress : 'No wallet address'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <LogoutBtn />
        </div>
    );
}