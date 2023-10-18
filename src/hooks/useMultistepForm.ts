import { ReactElement, useState } from 'react';

export function useMultistepForm(steps: ReactElement[]) {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);

    //move to next step
    function handleNext() {
        setCurrentStepIndex((current) => {
            if (current >= steps?.length - 1) return current;
            return current + 1;
        });
    }

    //move to previous step
    function handleBack() {
        setCurrentStepIndex((current) => {
            if (current <= 0) return current;
            return current - 1;
        });
    }

    return {
        currentStepIndex,
        step: steps[currentStepIndex],
        steps,
        isFirstStep: currentStepIndex === 0,
        isLastStep: currentStepIndex === steps.length - 1,
        handleNext,
        handleBack,
    };
}
