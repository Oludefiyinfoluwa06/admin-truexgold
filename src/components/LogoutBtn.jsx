import { useNavigate } from 'react-router-dom';
import { useAdmin } from '../contexts/useAdmin';

export default function LogoutBtn() {
    const navigate = useNavigate();
    const { logout } = useAdmin();

    return (
        <div className="flex justify-center mt-6">
            <button className="flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-900 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" onClick={async () => {
                await logout();
                navigate('/auth/signin');
            }}>
                Logout
            </button>
        </div>
    );
}