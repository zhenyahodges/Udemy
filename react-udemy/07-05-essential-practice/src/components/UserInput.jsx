import { useState } from 'react';

export default function UserInput() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10,
    });

    function handleChange(inputIdentifier, newValue) {
        setUserInput((prevUserInput) => {
            return {
                ...prevUserInput,
                [inputIdentifier]: newValue,
            };
        });
    }

    return (
        <section id='user-input'>
            <article className='input-group'>
                <p>
                    <label>INITIAL INVESTMENT</label>
                    <input
                        type='number'
                        required
                        value={userInput.initialInvestment}
                        onChange={(e) => handleChange('initialInvestment',e.target.value)}
                    ></input>
                </p>

                <p>
                    <label>ANNUAL INVESTMENT</label>
                    <input
                        type='number'
                        required
                        value={userInput.annualInvestment}
                        onChange={(e) => handleChange('annualInvestment',e.target.value)}
                    ></input>
                </p>
            </article>
            <article className='input-group'>
                <p>
                    <label> EXPECTED RETURN</label>
                    <input
                        type='number'
                        required
                        value={userInput.expectedReturn}
                        onChange={(e) => handleChange('expectedReturn',e.target.value)}
                    ></input>
                </p>

                <p>
                    <label>DURATION</label>
                    <input
                        type='number'
                        required
                        value={userInput.duration}
                        onChange={(e) => handleChange('duration',e.target.value)}
                    ></input>
                </p>
            </article>
        </section>
    );
}
