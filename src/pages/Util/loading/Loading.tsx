import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoadingBar } from '../../../components/ui/LoadingBar';

export const Loading = () => {
    const [loading, setLoading] = useState(false);
    const [loadingBarFade, setLoadingBarFade] = useState(false);

    const navigate = useNavigate();

    const handleLoading = () => {
        setLoading(true);
        return new Promise<void>((resolve) => {
            setTimeout(() => {
                setLoadingBarFade(true);
                resolve();
            }, 1000);
        });
    };

    // Delay loading bar animation
    useEffect(() => {
        setTimeout(() => {
            handleLoading();
        }, 500);
    }, []);

    // Redirect to the overview page after the loading bar has completed
    const redirect = async () => {
        await handleLoading();
        navigate('/overview');
    };

    // Delay redirecting to the overview page
    useEffect(() => {
        setTimeout(redirect, 500);
    }, []);

    return (
        <section className="flex h-full w-full flex-col items-center justify-center">
            <LoadingBar loading={loading} loadingBarFade={loadingBarFade} />
        </section>
    );
};
