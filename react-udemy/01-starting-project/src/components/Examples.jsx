import { useState } from 'react';
import TabButton from './TabButton.jsx';
import { EXAMPLES } from '../data';
import Section from './Section';
import Tabs from './Tabs.jsx';

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState();

    function handleSelect(selectedBtn) {
        setSelectedTopic(selectedBtn);
    }

    let tabContent = <p>Please select topic</p>;

    if (selectedTopic) {
        tabContent = (
            <div id='tab-content'>
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
            </div>
        );
    }

    return (
        <Section id='examples'>
            <h2>Examples</h2>
            <Tabs
            buttonsContainer='menu'
                buttons={
                    <>
                        <TabButton
                            isSelected={selectedTopic === 'components'}
                            // onSelect={() => handleSelect('components')}
                            onClick={() => handleSelect('components')}
                        >
                            Components
                        </TabButton>
                        <TabButton
                            isSelected={selectedTopic === 'jsx'}
                            // onSelect={() => handleSelect('jsx')}
                            onClick={() => handleSelect('jsx')}
                        >
                            JSX
                        </TabButton>
                        <TabButton
                            isSelected={selectedTopic === 'props'}
                            // onSelect={() => handleSelect('props')}
                            onClick={() => handleSelect('props')}
                        >
                            Props
                        </TabButton>
                        <TabButton
                            isSelected={selectedTopic === 'state'}
                            // onSelect={() => handleSelect('state')}
                            onClick={() => handleSelect('state')}
                        >
                            State
                        </TabButton>
                    </>
                }
            >
                {tabContent}
            </Tabs>
        
            {/* {!selectedTopic ? (
        <p>Please select topic</p>
    ) : (
        <div id='tab-content'>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
        </div>
    )} */}
        </Section>
    );
}
