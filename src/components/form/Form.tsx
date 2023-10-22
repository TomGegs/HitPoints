import { useNavigate } from 'react-router-dom';
import { useFormContext } from '../../hooks/useFormContext';
import { FormInputs } from './FormInputs';

export const Form = () => {
    const {
        title,
        step,
        setStep,
        data,
        canSubmit,
        disableBack,
        disableNext,
        hideBack,
        hideNext,
        hideSubmit,
    } = useFormContext();

    //move to next step
    function handleNext() {
        setStep((current) => current + 1);
    }

    //move to previous step
    function handleBack() {
        setStep((current) => current - 1);
    }

    const navigate = useNavigate();

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        console.log(JSON.stringify(data));
    }

    return (
        <form className="my-12 flex flex-col gap-10" onSubmit={handleSubmit}>
            <header>
                <h2>{title[step]}</h2>
            </header>
            <FormInputs />
            <div>
                <button
                    type="button"
                    disabled={disableBack}
                    onClick={handleBack}
                    className={`${hideBack ? 'hidden' : ''}`}
                >
                    Back
                </button>
                <button
                    onClick={handleNext}
                    disabled={disableNext}
                    className={`${hideNext ? 'hidden' : ''}`}
                >
                    Next
                </button>
                <button
                    disabled={!canSubmit}
                    type="submit"
                    className={`${hideSubmit ? 'hidden' : ''}`}
                >
                    Submit
                </button>
            </div>
        </form>
    );
};
