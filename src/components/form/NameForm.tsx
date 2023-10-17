type NameData = {
    name: string;
};

type NameFormProps = NameData & {
    updateFields: (fields: Partial<NameData>) => void;
};

const NameForm: React.FC<NameFormProps> = ({
    name,
    updateFields,
}: NameFormProps) => {
    return (
        <div>
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

export default NameForm;
