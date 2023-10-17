'use client';

import { useState } from 'react';

export type FormData = {
    name: string;
    age: number;
    gender: 'Male' | 'Female' | 'Non-binary' | 'Other' | 'Prefer not to say';
};

const INITIAL_DATA: FormData = {
    name: '',
    age: 1,
    gender: 'Male',
};

export const useFormState = () => {
    const [data, setData] = useState(INITIAL_DATA);
    const [loading, setLoading] = useState(false);

    return {
        data,
        setData,
        loading,
        setLoading,
    };
};

export default useFormState;
