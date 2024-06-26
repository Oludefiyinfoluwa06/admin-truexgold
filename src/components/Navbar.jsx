import truexgoldLogo2 from "../assets/truexgold-logo2.png";

export default function Navbar({ title }) {
    return (
        <header className="flex justify-between items-center p-6 bg-white shadow-md mb-[40px]">
            <h1 className="text-sm font-semibold sm:text-2xl">{title}</h1>
            <div className="flex items-center">
                <img
                    src={truexgoldLogo2}
                    alt="TrueXGold Logo"
                    className="w-8 h-8 mr-2"
                />
                <span className="text-sm font-semibold sm:text-lg">TRUEXGOLD ADMIN</span>
            </div>
        </header>
    )
}