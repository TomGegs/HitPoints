type FormData = {
    name: string;
    age: number;
    gender: 'Male' | 'Female' | 'Non-binary' | 'Other' | 'Prefer not to say';
};

const INITIAL_DATA: FormData = {
    name: '',
    age: 1,
    gender: 'Male',
};
export default INITIAL_DATA;
