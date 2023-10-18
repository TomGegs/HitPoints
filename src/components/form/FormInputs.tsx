type FormInputData = {
    age: number;
    gender: 'Male' | 'Female' | 'Non-binary' | 'Other' | 'Prefer not to say';
    name: string;
};

type FormInputProps = FormInputData & {
    updateFields: (fields: Partial<FormInputData>) => void;
    updateFields: (fields: Partial<FormInputData>) => void;
    updateFields: (fields: Partial<FormInputData>) => void;
};

export const FormInputs: React.FC<FormInputProps> = ({
    age,
    gender,
    name,
    updateFields,
}: FormInputProps) => {
    const genderOptions = [
        'Male',
        'Female',
        'Non-binary',
        'Other',
        'Prefer not to say',
    ];
    return (
        <div>
            <h2>Your Age</h2>
            <input
                type="number"
                placeholder="Your Age"
                value={age}
                onChange={(e) =>
                    updateFields({ age: parseInt(e.target.value) })
                }
            />
            <h2>Your Gender</h2>
            <select
                value={gender}
                onChange={(e) =>
                    updateFields({
                        gender: e.target.value as GenderData['gender'],
                    })
                }
            >
                <option value="">Select one</option>
                {genderOptions.map((gender) => (
                    <option key={gender} value={gender}>
                        {gender}
                    </option>
                ))}
            </select>
            <h2> Your Name</h2>
            <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => updateFields({ name: e.target.value })}
            />
        </div>
    );
};
