import { useState } from 'react';

export default function Player() {
    const [player, setPlayer] = useState('');
    const [submitted, setSubmitted] = useState(false);

    function handleChange(e) {
        setSubmitted(false);
        setPlayer(e.target.value);
    }

    function handleClick() {
        setSubmitted(true);
    }

    return (
        <section id='player'>
            <h2>Welcome {submitted ? player : 'unknown entity'}</h2>
            <p>
                <input type='text' onChange={handleChange} value={player} />
                <button onClick={handleClick}>Set Name</button>
            </p>
        </section>
    );
}
