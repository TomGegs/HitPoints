import { useState, FC } from 'react';
import { useParams } from 'react-router-dom';
import DotGraph from './graphs/DotGraph';
import LifeExpectancyData from '../../../data/LifeExpectancyData';

const Overview: FC = () => {
    const {
        ageYearRemaining,
        ageMonthsRemaining,
        ageWeeksRemaining,
        ageYears,
        ageMonths,
        ageWeeks,
        ausAverageLifeExpectancyYears,
        ausAverageLifeExpectancyMonths,
        ausAverageLifeExpectancyWeeks,
        marriageAgeYears,
        marriageAgeMonths,
        marriageAgeWeeks,
        divorceAgeYears,
        divorceAgeMonths,
        divorceAgeWeeks,
    } = LifeExpectancyData();

    const [currentView, setCurrentView] = useState('yearly');
    const { name } = useParams();

    return (
        <div className="flex h-full w-full flex-col items-center py-12 text-center text-blue-300 lg:p-10">
            <h1 className="text-2xl">
                {name} time remaining:
                <br />
                {(currentView === 'yearly' && (
                    <span className="text-4xl"> {ageYearRemaining} years</span>
                )) ||
                    (currentView === 'monthly' && (
                        <span> {ageMonthsRemaining} months</span>
                    )) ||
                    (currentView === 'weekly' && (
                        <span> {ageWeeksRemaining} weeks</span>
                    ))}
            </h1>
            <p className="text-2xl">
                At the age of
                {(currentView === 'yearly' && <span> {ageYears} years</span>) ||
                    (currentView === 'monthly' && (
                        <span> {ageMonths} months</span>
                    )) ||
                    (currentView === 'weekly' && (
                        <span> {ageWeeks} weeks</span>
                    ))}
            </p>

            <section></section>

            {/* Tabs for switching views */}
            <section className="my-4 flex space-x-2 lg:space-x-12">
                <button
                    onClick={() => setCurrentView('yearly')}
                    className={`${
                        currentView === 'yearly' ? 'bg-blue-500' : 'bg-blue-300'
                    } rounded px-4 py-2 text-white`}
                >
                    Years
                </button>
                <button
                    onClick={() => setCurrentView('monthly')}
                    className={`${
                        currentView === 'monthly'
                            ? 'bg-blue-500'
                            : 'bg-blue-300'
                    } rounded px-4 py-2 text-white`}
                >
                    Months
                </button>
                <button
                    onClick={() => setCurrentView('weekly')}
                    className={`${
                        currentView === 'weekly' ? 'bg-blue-500' : 'bg-blue-300'
                    } rounded px-4 py-2 text-white`}
                >
                    Weeks
                </button>
            </section>
            {/* Yearly Grid */}
            {currentView === 'yearly' ? (
                <DotGraph
                    age={ageYears}
                    averageLifeExpectancy={ausAverageLifeExpectancyYears}
                    cols="grid-cols-10"
                    rows="grid-rows-10"
                    mobileDotSize="h-4 w-4"
                    desktopDotSize="lg:h-20 lg:w-20"
                />
            ) : null}
            {currentView === 'monthly' ? (
                <DotGraph
                    age={ageMonths}
                    averageLifeExpectancy={ausAverageLifeExpectancyMonths}
                    cols="grid-cols-24"
                    rows="grid-rows-100"
                    mobileDotSize="h-2 w-2"
                    desktopDotSize="lg:h-5 lg:w-5"
                />
            ) : null}
            {currentView === 'weekly' ? (
                <DotGraph
                    age={ageWeeks}
                    averageLifeExpectancy={ausAverageLifeExpectancyWeeks}
                    cols="grid-cols-52"
                    rows="grid-rows-100"
                    mobileDotSize="h-1 w-1"
                    desktopDotSize="lg:h-3 lg:w-3"
                />
            ) : null}
        </div>
    );
};

export default Overview;
