import { useContext, FormEvent } from 'react';

import {
    useFormAgeInput,
    useFormGenderInput,
    FormContext,
    INITIAL_DATA,
} from '../../context/FormContext';
import { useNavigate } from 'react-router-dom';

export const FormQuestions = () => {
    const { userAge, handleAgeChange } = useFormAgeInput();
    const { userGender, handleGenderChange } = useFormGenderInput();
    const { canSubmit, handleAgeValidation } = useContext(FormContext);

    const navigate = useNavigate();

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        const isValidAge = handleAgeValidation(userAge, userGender); // Call handleAgeValidation with userAge and userGender
        if (isValidAge !== undefined && isValidAge) {
            INITIAL_DATA.userAge = userAge;
            INITIAL_DATA.userGender = userGender;
            navigate(`/loading`);
            console.log('User Age:', userAge);
            console.log('User Gender:', userGender);
        } else {
            alert('Your age is invalid. Please enter a valid age');
        }
    }

    const genderOptions = ['Male', 'Female', 'Non-binary', 'Prefer not to say'];

    return (
        <form>
            <h2>Your Age</h2>
            <input
                type="number"
                id="userAge"
                placeholder="Must be above 0"
                value={userAge}
                onChange={handleAgeChange}
            />
            <h2>Your Gender</h2>
            <select value={userGender} onChange={handleGenderChange}>
                {genderOptions.map((userGender) => (
                    <option key={userGender} value={userGender}>
                        {userGender}
                    </option>
                ))}
            </select>
            <button
                className={`my-12 w-40 rounded-xl border border-blue-500 p-2 font-thin transition-all hover:bg-blue-950
                
                `}
                onClick={handleSubmit}
                disabled={!canSubmit}
            >
                Begin
            </button>
        </form>
    );
};
