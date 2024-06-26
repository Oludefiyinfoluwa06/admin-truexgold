import truexgoldLogo from '../assets/truexgold-logo.png';

export default function AuthCard() {
    return (
        <div className="flex items-center justify-center bg-blue-900 p-8 md:w-1/2">
            <img
                src={truexgoldLogo}
                alt="TrueXGold Logo"
                className="w-32 h-32"
            />
        </div>
    );
}