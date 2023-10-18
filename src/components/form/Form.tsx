import INITIAL_DATA from '../../data/INITIAL_DATA';
import { useFormContext } from '../../hooks/useFormContext';
import { FormInputs } from './FormInputs';

export const Form = () => {
    const { title, step, setStep, data, setData, canSubmit } = useFormContext();

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
        if (!isLastStep) {
            return next();
        } else {
            navigate(`/overview/${data.name}/${data.age}/${data.gender}`);
        }
    }
    return (
        <form className="my-12 flex flex-col gap-10" onSubmit={handleSubmit}>
            <header>
                <h2>{title[step]}</h2>
            </header>
            <FormInputs />
            <div>
                {isFirstStep ? null : (
                    <button type="button" onClick={back}>
                        Back
                    </button>
                )}
                {isLastStep ? (
                    <button disabled={!canSubmit} type="submit">
                        Submit
                    </button>
                ) : (
                    <button onClick={handleNext}>Start</button>
                )}
            </div>
        </form>
    );
};
