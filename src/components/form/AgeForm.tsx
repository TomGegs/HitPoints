type AgeData = {
    age: number;
};

type AgeFormProps = AgeData & {
    updateFields: (fields: Partial<AgeData>) => void;
};

const AgeForm: React.FC<AgeFormProps> = ({
    age,
    updateFields,
}: AgeFormProps) => {
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
        </div>
    );
};

export default AgeForm;
