import {
    createContext,
    useReducer,
    ReactElement,
    useCallback,
    ChangeEvent,
    useContext,
    ReactNode,
} from 'react';

// Initial values for context
type DataType = {
    userAge: number;
    userGender: 'Male' | 'Female' | 'Non-binary' | 'Prefer not to say';
    [key: string]: number | string; // Additional properties can be either numbers or strings
};

export const INITIAL_DATA: DataType = {
    userAge: 1,
    userGender: 'Male',
};

// Reducer action types for context
const REDUCER_ACTION_TYPE = {
    SET_AGE: 'SET_AGE',
    SET_GENDER: 'SET_GENDER',
} as const;

type ReducerAction =
    | { type: 'SET_AGE'; payload: number } // Action to set user age
    | {
          type: 'SET_GENDER';
          payload: 'Male' | 'Female' | 'Non-binary' | 'Prefer not to say'; // Action to set user gender
      };

const reducer = (state: DataType, action: ReducerAction): DataType => {
    switch (action.type) {
        case 'SET_AGE':
            return { ...state, userAge: action.payload ?? 1 }; // Update user's age
        case 'SET_GENDER':
            return { ...state, userGender: action.payload ?? 'Male' }; // Update user's gender
        default:
            throw new Error();
    }
};

// Custom hook to handle form context
const useFormContext = (INITIAL_DATA: DataType) => {
    const [state, dispatch] = useReducer(reducer, INITIAL_DATA);

    const handleAgeChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: REDUCER_ACTION_TYPE.SET_AGE,
            payload: parseInt(e.target.value),
        });
    }, []);

    const handleGenderChange = useCallback(
        (e: ChangeEvent<HTMLSelectElement>) => {
            dispatch({
                type: REDUCER_ACTION_TYPE.SET_GENDER,
                payload: e.target.value as DataType['userGender'],
            });
        },
        []
    );

    return {
        state, // Current state containing userAge and userGender
        handleAgeChange, // Function to handle age changes
        handleGenderChange, // Function to handle gender changes
    };
};

// Type for context
type UseFormContextType = {
    state: DataType; // Current context state
    handleAgeChange: (e: ChangeEvent<HTMLInputElement>) => void; // Function to handle age changes
    handleGenderChange: (e: ChangeEvent<HTMLSelectElement>) => void; // Function to handle gender changes
    handleAgeValidation: (
        userAge: number,
        userGender: DataType['userGender']
    ) => void;
    canSubmit: boolean; // A flag to determine if form submission is allowed
};

// Initial state for context
const INITIAL_CONTEXT_STATE: UseFormContextType = {
    state: INITIAL_DATA,
    handleAgeChange: () => {},
    handleGenderChange: () => {},
    handleAgeValidation: () => {},
    canSubmit: false,
};

export const FormContext = createContext<UseFormContextType>(
    INITIAL_CONTEXT_STATE
);

// Provider for FormContext
export const FormProvider = ({
    children,
    userAge,
    userGender,
}: {
    children: ReactNode;
    userAge: number; // User's age
    userGender: 'Male' | 'Female' | 'Non-binary' | 'Prefer not to say'; // User's gender
}): ReactElement => {
    const { state, handleAgeChange, handleGenderChange } = useFormContext({
        userAge,
        userGender,
    });

    // VALIDATION AND NAVIGATION LOGIC
    // Check specific mandatory fields are filled (age & gender)
    const canSubmit = Object.keys(state)
        .filter((key) => key.startsWith('user'))
        .map((key) => state[key])
        .every(Boolean);

    // Check if user is within the 'Australian Average' life expectancy range
    function handleAgeValidation(
        userAge: number,
        userGender: DataType['userGender']
    ) {
        if (
            (userGender === 'Male' && userAge > 0 && userAge <= 81) ||
            (userGender !== 'Male' && userAge > 0 && userAge <= 86)
        ) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <FormContext.Provider
            value={{
                state,
                handleAgeChange,
                handleGenderChange,
                canSubmit,
                handleAgeValidation,
            }}
        >
            {children}
        </FormContext.Provider>
    );
};

// Custom hook for age input
type UseFormAgeInputType = {
    userAge: number; // User's age
    handleAgeChange: (e: ChangeEvent<HTMLInputElement>) => void; // Function to handle age changes
};

export const useFormAgeInput = (): UseFormAgeInputType => {
    const { state, handleAgeChange } = useContext(FormContext);
    return { userAge: state.userAge, handleAgeChange };
};

// Custom hook for gender input
type UseFormGenderInputType = {
    userGender: 'Male' | 'Female' | 'Non-binary' | 'Prefer not to say'; // User's gender
    handleGenderChange: (e: ChangeEvent<HTMLSelectElement>) => void; // Function to handle gender changes
};

export const useFormGenderInput = (): UseFormGenderInputType => {
    const { state, handleGenderChange } = useContext(FormContext);
    return { userGender: state.userGender, handleGenderChange };
};

// Get user age from the context
export const getUserAge = (state: DataType) => {
    return state.userAge;
};

// Get user gender from the context
export const getUserGender = (state: DataType) => {
    return state.userGender;
};
