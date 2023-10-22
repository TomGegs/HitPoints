import { useFormContext } from '../../hooks/useFormContext';
import { Page2 } from '../../pages/Page2';
import { FormQuestions } from './FormQuestions';

export const FormInputs = () => {
    const { step } = useFormContext();

    const displayStep = {
        0: <FormQuestions />,
        1: <Page2 />,
    };

    return <div>{displayStep[step]}</div>;
};
