type FormData = {
    userAge: number;
    userGender: 'Male' | 'Female' | 'Non-binary' | 'Prefer not to say';
};

export const INITIAL_DATA: FormData = {
    userAge: 1,
    userGender: 'Male',
};
