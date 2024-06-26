import AuthCard from "../components/AuthCard";
import Button from "../components/Button";

export default function SignIn() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-400">
            <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden w-[600px]">
                <AuthCard />
                <div className="p-8 md:w-1/2">
                    <h2 className="text-2xl font-semibold text-center">Admin Sign in</h2>
                    <form className="mt-8 space-y-6">
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                                Username
                            </label>
                            <input
                                id="username"
                                name="username"
                                type="text"
                                autoComplete="username"
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="text-sm">
                                <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                                Forgot password?
                                </a>
                            </div>
                        </div>
                        <Button text='Sign In' />
                    </form>
                </div>
            </div>
        </div>
    );
}