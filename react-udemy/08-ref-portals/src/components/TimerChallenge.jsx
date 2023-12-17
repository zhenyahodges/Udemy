import { useRef, useState } from 'react';
import ResultModal from './ResultModal';

export default function TimerChallenge({ title, targetTime }) {
    const timer = useRef();
    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, SetTimerExpired] = useState(false);

    function handleStart() {
        timer.current = setTimeout(() => {
            SetTimerExpired(true);
        }, targetTime * 1000);

        setTimerStarted(true);
    }

    function handleStop() {
        clearTimeout(timer.current);
    }
    return (
        <>
            {timerExpired && <ResultModal targetTime={targetTime} result='lost'/>}
            <section className='challenge'>
                <h2>{title}</h2>
                {timerExpired && <p>You Lost!</p>}
                <p className='challenge-time'>
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <button onClick={timerStarted ? handleStop : handleStart}>
                    {timerStarted ? 'Stop' : 'Start'} Challenge
                </button>
                <p className={timerStarted ? 'active' : undefined}>
                    {timerStarted ? 'Time is running...' : 'Timer inactive'}
                </p>
            </section>
        </>
    );
}
