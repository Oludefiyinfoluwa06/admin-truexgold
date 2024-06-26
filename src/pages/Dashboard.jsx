export default function Dashboard() {
    const Card = ({ title, description }) => {
        return (
            <div className="p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-2">{title}</h2>
                <p className="text-gray-700">{description}</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-r from-blue-900 to-blue-400">
            <header className="flex justify-between items-center p-6 bg-white shadow-md">
                <h1 className="text-2xl font-semibold">Welcome Back</h1>
                <div className="flex items-center">
                    <img
                        src="/path/to/truexgold-logo.png"
                        alt="TrueXGold Logo"
                        className="w-8 h-8 mr-2"
                    />
                    <span className="text-lg font-semibold">TRUEXGOLD ADMIN</span>
                </div>
            </header>
            <main className="flex flex-col flex-grow p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card
                        title="Monitor User's Activity"
                        description="Analyze user engagement metrics such as active users, session lengths, and retention rates. This data helps in understanding user behavior and improving the platform."
                    />
                    <Card
                        title="Sets And Adjusts Session Limits"
                        description="Set the basic parameters for a tapping session, such as the maximum number of coins that can be earned per session and the duration of each session."
                    />
                    <Card
                        title="Create Tasks"
                        description="Schedule tasks to update to increase user engagement and promote societal interactions within the community."
                    />
                    <Card
                        title="Transaction Monitoring"
                        description="Get people with at least 1,000 followers to post your adverts and perform social engagement tasks for you on their social media account."
                    />
                    <Card
                        title="View User's Wallets"
                        description="Search for and select individual users to view their wallet information."
                    />
                    <Card
                        title="Community Management"
                        description="Share regular updates on the platform, including new features, upcoming events, and other important announcements."
                    />
                </div>
                <div className="flex justify-center mt-6">
                    <button className="flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                        <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1m0-5v-6a3 3 0 00-3-3H5a3 3 0 00-3 3v10a3 3 0 003 3h5a3 3 0 003-3v-1m6-4h2a2 2 0 012 2v5a2 2 0 01-2 2h-4m-4-4H9m0 0V9m0 4v1m0 5v1" />
                        </svg>
                        Logout
                    </button>
                </div>
            </main>
        </div>
    );
}
