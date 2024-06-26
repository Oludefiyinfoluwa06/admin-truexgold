import { useState } from 'react';
import Button from '../components/Button';
import LogoutBtn from '../components/LogoutBtn';
import Navbar from '../components/Navbar';
import { useAdmin } from '../contexts/useAdmin';

export default function SetLimit() {
    const [amount, setAmount] = useState('');

    const { setEarningLimit } = useAdmin();
    
    const handleSetLimit = async () => {
        await setEarningLimit(amount);
    }

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-r from-blue-900 to-blue-400">
            <Navbar title='Set and Adjust Session Limit' />

            <form className='bg-white w-[600px] mx-auto p-[40px] rounded' onSubmit={handleSetLimit}>
                <div>
                    <label htmlFor="amount">Amount</label>
                    <input 
                        type="text" 
                        id="amount" 
                        value={amount} 
                        onChange={e => setAmount(e.target.value)} 
                        className='w-full bg-[#A4A0A0] rounded-md p-2 py-1 outline-none'
                    />
                </div>

                <div className='flex items-center justify-center mt-[20px]'>
                    <Button text='Set' />
                </div>
            </form>

            <LogoutBtn />
        </div>
    );
}