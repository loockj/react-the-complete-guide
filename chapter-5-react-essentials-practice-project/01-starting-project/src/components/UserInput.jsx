import Input from './Input.jsx';

const UserInput = ({ onChange, userInput }) => {
    return (
        <section id="user-input">
            <div className="input-group">
                <Input
                    id="initialInvestment"
                    label="Initial investment"
                    value={userInput.initialInvestment}
                    onChange={onChange}
                />
                <Input
                    id="annualInvestment"
                    label="Annual investment"
                    value={userInput.annualInvestment}
                    onChange={onChange}
                />
            </div>
            <div className="input-group">
                <Input
                    id="expectedReturn"
                    label="Expected return"
                    value={userInput.expectedReturn}
                    onChange={onChange}
                />
                <Input
                    id="duration"
                    label="Duration"
                    value={userInput.duration}
                    onChange={onChange}
                />
            </div>
        </section>
    );
};

export default UserInput;
