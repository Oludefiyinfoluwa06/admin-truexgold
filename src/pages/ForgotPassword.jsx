import { useState } from "react";
import AuthCard from "../components/AuthCard";
import Button from "../components/Button";
import { useAdmin } from "../contexts/useAdmin";
import { Link, useNavigate } from "react-router-dom";

export default function ForgotPassword() {
    const [email, setEmail] = useState('');
    
    const { requestResetCode } = useAdmin();
    const navigate = useNavigate();
    
    const handleSignIn = async (e) => {
        e.preventDefault();

        await requestResetCode(email);
        navigate('/auth/reset-password');
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-400">
            <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden w-[600px]">
                <AuthCard />
                <div className="p-8 md:w-1/2">
                    <h2 className="text-2xl font-semibold text-center">Admin Sign in</h2>
                    <form className="mt-8 space-y-6" onSubmit={handleSignIn}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="text-sm">
                                <Link to="/auth/signin" className="font-medium text-blue-600 hover:text-blue-500">
                                Back to Login?
                                </Link>
                            </div>
                        </div>
                        <Button text='Get code' />
                    </form>
                </div>
            </div>
        </div>
    );
}