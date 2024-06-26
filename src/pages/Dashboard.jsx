import { useNavigate } from 'react-router-dom';
import Navbar from "../components/Navbar";
import LogoutBtn from "../components/LogoutBtn";

export default function Dashboard() {
    const navigate = useNavigate();

    const Card = ({ title, description, route }) => {
        return (
            <div className="p-6 bg-white rounded-lg shadow-md cursor-pointer" onClick={() => navigate(`/${route}`)}>
                <h2 className="text-xl font-semibold mb-2">{title}</h2>
                <p className="text-gray-700">{description}</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-r from-blue-900 to-blue-400">
            <Navbar title='Welcome back' />
            <main className="flex flex-col flex-grow p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card
                        title="Monitor User's Activity"
                        description="Analyze user engagement metrics such as active users, session lengths, and retention rates. This data helps in understanding user behavior and improving the platform."
                        route=""
                    />
                    <Card
                        title="Sets And Adjusts Session Limits"
                        description="Set the basic parameters for a tapping session, such as the maximum number of coins that can be earned per session and the duration of each session."
                        route=""
                    />
                    <Card
                        title="Create Tasks"
                        description="Schedule tasks to update to increase user engagement and promote societal interactions within the community."
                        route=""
                    />
                    <Card
                        title="Transaction Monitoring"
                        description="Get people with at least 1,000 followers to post your adverts and perform social engagement tasks for you on their social media account."
                        route=""
                    />
                    <Card
                        title="View User's Wallets"
                        description="Search for and select individual users to view their wallet information."
                        route=""
                    />
                    <Card
                        title="Community Management"
                        description="Share regular updates on the platform, including new features, upcoming events, and other important announcements."
                        route=""
                    />
                </div>
                <LogoutBtn />
            </main>
        </div>
    );
}
