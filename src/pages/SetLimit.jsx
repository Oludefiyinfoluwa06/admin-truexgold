import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import LogoutBtn from '../components/LogoutBtn';
import Navbar from '../components/Navbar';
import { useAdmin } from '../contexts/useAdmin';

export default function SetLimit() {
    const [amount, setAmount] = useState(0);
    const [message, setMessage] = useState(null);

    const { setEarningLimit } = useAdmin();
    const navigate = useNavigate();

    useEffect(() => {
        if (message) {
            const timeout = setTimeout(() => {
                setMessage(null);
                setAmount(0);
                navigate('/')
            }, 3000);

            return () => clearTimeout(timeout);
        }
    }, [message, navigate]);
    
    const handleSetLimit = async (e) => {
        e.preventDefault();

        const data = await setEarningLimit(amount);
        setMessage(data.message);
    }

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-r from-blue-900 to-blue-400">
            <Navbar title='Set and Adjust Session Limit' />
            {message && <div className='absolute top-0 left-0 w-full bg-green-500 text-white p-2'>{message}</div>}

            <form className="bg-white max-w-lg mx-auto p-8 rounded-lg shadow-md" onSubmit={handleSetLimit}>
                <div className="mb-6">
                    <label htmlFor="amount" className="block text-gray-700 font-semibold mb-2">Amount</label>
                    <input 
                        type="number" 
                        id="amount" 
                        value={amount} 
                        onChange={e => setAmount(e.target.value)} 
                        className="w-full bg-gray-200 rounded-md p-2 outline-none focus:border-blue-500"
                    />
                </div>
                <div className="flex items-center justify-center">
                    <Button text="Set" />
                </div>
            </form>

            <LogoutBtn />
        </div>
    );
}