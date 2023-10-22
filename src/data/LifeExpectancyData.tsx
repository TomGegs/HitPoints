import { useContext } from 'react';
import { FormContext } from '../context/FormContext';

export const LifeExpectancyData = () => {
    const { userAge, userGender } = useContext(FormContext).state;

    const gender = userGender;

    //convert age to years, months and weeks
    const ageYears = userAge;
    const ageMonths = Math.floor(ageYears * 12.008);
    const ageWeeks = Math.floor(ageYears * 52.179);

    //life expectancy in Australia
    const ausAverageLifeExpectancyYears = gender === 'Male' ? 81 : 86;
    const ausAverageLifeExpectancyMonths = Math.floor(
        ausAverageLifeExpectancyYears * 12.008
    );
    const ausAverageLifeExpectancyWeeks = Math.floor(
        ausAverageLifeExpectancyYears * 52.179
    );

    //remaining life expectancy
    const ageYearRemaining = ausAverageLifeExpectancyYears - ageYears;
    const ageMonthsRemaining = ausAverageLifeExpectancyMonths - ageMonths;
    const ageWeeksRemaining = ausAverageLifeExpectancyWeeks - ageWeeks;

    //Clock countdown
    const clockYearRemaining = ageYearRemaining;
    const clockMonthsRemaining = ageMonthsRemaining;
    const clockWeeksRemaining = ageWeeksRemaining;

    //Marriage data
    const marriageAge = gender === 'Male' ? 32 : 31;
    const marriageAgeYears = marriageAge;
    const marriageAgeMonths = Math.floor(marriageAgeYears * 12.008);
    const marriageAgeWeeks = Math.floor(marriageAgeYears * 52.179);

    //Divorce data
    const divorceAge = gender === 'Male' ? 46 : 43;
    const divorceAgeYears = divorceAge;
    const divorceAgeMonths = Math.floor(divorceAgeYears * 12.008);
    const divorceAgeWeeks = Math.floor(divorceAgeYears * 52.179);

    return {
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
    };
};

export default LifeExpectancyData;
