const Input = ({ label, id, value, onChange }) => {
    return (
        <p>
            <label htmlFor={id}>{label}</label>
            <input
                type="number"
                required
                id={id}
                value={value}
                onChange={event => onChange(id, event.target.value)}
            />
        </p>
    );
};

export default Input;
