type GenderData = {
    gender: 'Male' | 'Female' | 'Non-binary' | 'Other' | 'Prefer not to say';
};

type GenderFormProps = GenderData & {
    updateFields: (fields: Partial<GenderData>) => void;
};

const GenderForm: React.FC<GenderFormProps> = ({
    gender,
    updateFields,
}: GenderFormProps) => {
    const genderOptions = [
        'Male',
        'Female',
        'Non-binary',
        'Other',
        'Prefer not to say',
    ];
    return (
        <div>
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
        </div>
    );
};

export default GenderForm;
