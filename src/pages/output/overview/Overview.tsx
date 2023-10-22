import { useState, useEffect, FC } from 'react';
import DotGraph from './graphs/DotGraph';
import LifeExpectancyData from '../../../data/LifeExpectancyData';

const Overview: FC = () => {
    const {
        ageMonthsRemaining,
        ageWeeksRemaining,
        ageMonths,
        ageWeeks,
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
    const [fadeIn, setFadeIn] = useState(false);
    const [visibleItems, setVisibleItems] = useState(0);
    const [hoveredSquare, setHoveredSquare] = useState<number | null>(null);

    const ausAverageLifeExpectancyYears = 81;
    const ageYears = 34;
    const ageYearRemaining = ausAverageLifeExpectancyYears - ageYears;

    // // Standard deviation for the bell-curve
    // const standardDeviation = ausAverageLifeExpectancyYears / 3;

    // // Distance of array items from ageYears
    // const calculateHeight = (itemIndex) => {
    //     const distance = Math.abs(itemIndex + 1 - ageYears);

    //     // Height using normal distribution
    //     const height = Math.exp(
    //         -(distance ** 2) / (2 * standardDeviation ** 2)
    //     );

    //     // Height for visualization
    //     return height * 150;
    // };

    useEffect(() => {
        setTimeout(() => {
            setFadeIn(true);
        }, 500);
    });

    useEffect(() => {
        const interval = setInterval(() => {
            if (visibleItems < ausAverageLifeExpectancyYears) {
                setVisibleItems((prevVisibleItems) => prevVisibleItems + 1);
            } else {
                clearInterval(interval);
            }
        }, 50);

        return () => clearInterval(interval);
    }, [ausAverageLifeExpectancyYears]);

    return (
        <div className="flex h-full w-full flex-col py-12 text-center text-blue-300 lg:p-10">
            <section
                className={`transition-all duration-500 ${
                    fadeIn ? 'opacity-100 ' : 'opacity-0'
                }`}
            >
                {/* top row of app */}
                <div className="flex w-full flex-row">
                    <div className="flex w-full items-end rounded-3xl bg-[#7DF9FF] lg:h-[500px]">
                        <h1 className="text-9xl text-black">HitPoints</h1>
                    </div>
                    <div className="items-centered m-1 flex w-full flex-row justify-between rounded-3xl  bg-[#7DF9FF] p-1">
                        <div
                            className={`grid-cols-81 grid w-full grid-rows-1 rounded-3xl border-4 border-gray-400 bg-black p-2 text-black`}
                        >
                            {[...Array(ausAverageLifeExpectancyYears)].map(
                                (_, i) => (
                                    <div
                                        key={i}
                                        className={`relative  cursor-pointer rounded-full transition-opacity duration-500  ${
                                            i < visibleItems
                                                ? 'opacity-100'
                                                : 'opacity-0'
                                        } ${
                                            i + 1 === ageYearRemaining
                                                ? ' w-1.5 bg-green-300 hover:bg-red-300'
                                                : i + 1 > ageYearRemaining
                                                ? ' w-1 bg-black hover:bg-blue-200'
                                                : ' w-1.5 bg-green-700 hover:bg-gray-200'
                                        }`}
                                        onMouseEnter={() => setHoveredSquare(i)}
                                        onMouseLeave={() =>
                                            setHoveredSquare(null)
                                        }
                                    >
                                        {hoveredSquare === i && (
                                            <div
                                                className={`absolute bottom-0 left-0 z-10 cursor-pointer bg-black text-center text-lg font-black ${
                                                    i + 1 === ageYearRemaining
                                                        ? 'text-red-500'
                                                        : 'text-yellow-400'
                                                }`}
                                            >
                                                {i + 1}
                                            </div>
                                        )}
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </div>

                <h1 className="text-2xl">
                    HitPoints remaining:
                    <br />
                    {(currentView === 'yearly' && (
                        <span className="text-4xl">
                            {' '}
                            {ageYearRemaining} years
                        </span>
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
                    {(currentView === 'yearly' && (
                        <span> {ageYears} years</span>
                    )) ||
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
                            currentView === 'yearly'
                                ? 'bg-blue-500'
                                : 'bg-blue-300'
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
                            currentView === 'weekly'
                                ? 'bg-blue-500'
                                : 'bg-blue-300'
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
            </section>
        </div>
    );
};

export default Overview;
