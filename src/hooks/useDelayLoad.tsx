'use client';

import { useNavigate } from 'react-router-dom';

type useDelayRouteProps = {
    delayInMS: number;
    path: string;
};

export async function useDelayRoute({ delayInMS, path }: useDelayRouteProps) {
    const navigate = useNavigate();

    await new Promise((resolve) => setTimeout(resolve, delayInMS));
    navigate(`/${path}`);
}
