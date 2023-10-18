import { createContext, useState, FC, ReactNode } from 'react';
import INITIAL_DATA from '../data/INITIAL_DATA';

interface FormContextType {
    title: { [key: number]: string };
    step: number;
    data: typeof INITIAL_DATA;
    setData: (data: typeof INITIAL_DATA) => void;
    canSubmit: boolean;
}
export const FormContext = createContext<FormContextType>({
    title: { 0: '', 1: '' },
    step: 0,
    setStep: (step: number) => {},
    data: INITIAL_DATA,
    setData: (data: typeof INITIAL_DATA) => {},
    canSubmit: false,
});

interface FormContextProviderProps {
    children: ReactNode;
}

const FormContextProvider: FC<FormContextProviderProps> = ({ children }) => {
    const title = {
        0: 'HitPoints',
        1: 'Your Details',
    };

    const [step, setStep] = useState(0);
    const [data, setData] = useState(INITIAL_DATA);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const type = e.target.type;
        const name = e.target.name;
        const value =
            type === 'number' ? parseInt(e.target.value) : e.target.value;

        setData({ ...data, [name]: value });
    };

    const { gender, age, ...requiredInputs } = data;
    // Check mandatory fields are filled
    const canSubmit =
        Object.values(requiredInputs).every(Boolean) &&
        step === Object.keys(title).length - 1;

    return (
        <FormContext.Provider
            value={{ title, step, setStep, data, setData, canSubmit }}
        >
            {children}
        </FormContext.Provider>
    );
};
