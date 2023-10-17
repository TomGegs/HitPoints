import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const handleButtonClick = () => {
        setIsLoading(true);

        // Delay navigation by 1 second (1000 milliseconds)
        setTimeout(() => {
            setIsLoading(false);
            navigate('/input');
        }, 1000);
    };

    return (
        <div className="flex h-screen w-full flex-col items-center justify-center p-10 font-black text-blue-300">
            <h1 className="text-4xl">HitPoints</h1>
            <p>An existential estimation of existence</p>
            <button
                className={`my-12 w-40 rounded-xl border border-blue-500 p-2 font-thin transition-all hover:bg-blue-950${
                    isLoading
                        ? 'scale-0 opacity-100 '
                        : 'scale-100 cursor-pointer  opacity-100 hover:animate-pulse'
                }`}
                onClick={handleButtonClick}
                disabled={isLoading}
            >
                {isLoading ? 'Getting Older...' : 'Begin'}
            </button>
        </div>
    );
};

export default Home;
