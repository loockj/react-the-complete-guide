import { useState, useRef } from 'react';
import ResultModal from './ResultModal';

export default function TimerChallenge({ title, targetTime }) {
    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

    const timerRef = useRef();
    const dialogRef = useRef();

    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

    if (timeRemaining <= 0) {
        clearInterval(timerRef.current);
        dialogRef.current.open();
    }

    function handleReset() {
        setTimeRemaining(targetTime * 1000);
    }

    const handleStart = () => {
        timerRef.current = setInterval(() => {
            setTimeRemaining(prevValue => prevValue - 10);
        }, 10);
    };

    const handleStop = () => {
        clearInterval(timerRef.current);
        dialogRef.current.open();
    };

    return (
        <>
            <ResultModal
                ref={dialogRef}
                targetTime={targetTime}
                remainingTime={timeRemaining}
                onReset={handleReset}
            />
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerIsActive ? handleStop : handleStart}>
                        {timerIsActive ? 'Stop' : 'Start'} challenge
                    </button>
                </p>
                <p className={timerIsActive ? 'active' : undefined}>
                    {timerIsActive ? 'Time is running' : 'Timer inactive'}
                </p>
            </section>
        </>
    );
}
