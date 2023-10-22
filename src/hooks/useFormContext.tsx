import { useContext } from 'react';
import { FormContext } from '../context/FormContext';

type useFormContextType = ReturnType<typeof useFormContext>;

export const useFormContext = ({ INITIAL_DATA }) => {
    return useContext(FormContext);
};
