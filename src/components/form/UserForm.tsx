import { FormEvent, FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMultistepForm } from '../../hooks/useMultistepForm';
import NameForm from './NameForm';
import AgeForm from './AgeForm';
import GenderForm from './GenderForm';
import { useFormState, FormData } from '../../hooks/useFormState';

const UserForm: FC = () => {
    const { data, setData } = useFormState();

    function updateFields(fields: Partial<FormData>) {
        setData((prev) => {
            return { ...prev, ...fields };
        });
    }
    const navigate = useNavigate();

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        if (!isLastStep) {
            return next();
        } else {
            navigate(`/overview/${data.name}/${data.age}/${data.gender}`);
        }
    }

    function handleNext() {
        // Prevent proceeding if stage is not completed
        if (currentStepIndex === 0) {
            return;
        }
        if (currentStepIndex === 1) {
            return;
        }

        if (currentStepIndex === 2) {
            return;
        }
        // Proceed to next step if no error
        next();
    }

    const {
        steps,
        currentStepIndex,
        step,
        isFirstStep,
        isLastStep,
        back,
        next,
    } = useMultistepForm([
        <NameForm {...data} updateFields={updateFields} />,
        <AgeForm {...data} updateFields={updateFields} />,
        <GenderForm {...data} updateFields={updateFields} />,
    ]);

    return (
        <form className="my-12 flex flex-col gap-10" onSubmit={handleSubmit}>
            <h1>
                Step {currentStepIndex + 1} of {steps.length}
            </h1>
            {step}
            <div>
                {isFirstStep ? null : (
                    <button type="button" onClick={back}>
                        Back
                    </button>
                )}
                {isLastStep ? (
                    <button type="submit">Submit</button>
                ) : (
                    <button onClick={handleNext}>Next</button>
                )}
            </div>
        </form>
    );
};

export default UserForm;
