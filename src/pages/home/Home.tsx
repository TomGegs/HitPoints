import { useContext } from 'react';
import { FormContext, FormProvider } from '../../context/FormContext';
import { FormQuestions } from '../../components/form/FormQuestions';

const Home = () => {
    const { state } = useContext(FormContext);
    const { userAge, userGender } = state;

    return (
        <div className="flex h-screen w-full flex-col items-center justify-center p-10 font-black text-blue-300">
            <h1 className="text-4xl">HitPoints</h1>
            <p>An existential estimation of existence</p>
            <FormProvider userAge={userAge} userGender={userGender}>
                <FormQuestions />
            </FormProvider>
        </div>
    );
};

export default Home;
