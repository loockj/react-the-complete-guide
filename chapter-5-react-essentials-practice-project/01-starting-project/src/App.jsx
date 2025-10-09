import { useState } from 'react';
import Header from './components/Header.jsx';
import UserInput from './components/UserInput.jsx';
import Results from './components/Results.jsx';

function App() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10,
    });

    const handleChange = (key, newValue) => {
        setUserInput(prevValue => ({ ...prevValue, [key]: +newValue }));
    };

    const inputIsValid = userInput.duration >= 1;
    return (
        <>
            <Header />
            <main>
                <UserInput onChange={handleChange} userInput={userInput} />
                {inputIsValid && <Results input={userInput} />}
                {!inputIsValid && (
                    <p className="center">Please enter a duration greater than zero.</p>
                )}
            </main>
        </>
    );
}

export default App;
