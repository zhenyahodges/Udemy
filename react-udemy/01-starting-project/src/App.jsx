import CoreConcept from './components/CoreConcept';
import Header from './components/Header/Header';
import TabButton from './components/TabButton';
import { CORE_CONCEPTS } from './data';

function App() {
function handleSelect(){
    console.log('selected');
}

    return (
        <div>
            <Header />
            <main>
                <section id='core-concepts'>
                    <h2>Core Concepts</h2>
                    <ul>
                        <CoreConcept {...CORE_CONCEPTS[0]} />
                        <CoreConcept {...CORE_CONCEPTS[1]} />
                        <CoreConcept {...CORE_CONCEPTS[2]} />
                        <CoreConcept {...CORE_CONCEPTS[3]} />
                    </ul>
                </section>
                <section id='examples'>
                    <h2>Examples</h2>
                    <menu>
                      <TabButton onSelect={handleSelect}>Components</TabButton>
                      <TabButton>JSX</TabButton>
                      <TabButton>Props</TabButton>
                      <TabButton>State</TabButton>
                    </menu>
                    Dynamic Content
                </section>
            </main>
        </div>
    );
}

export default App;
