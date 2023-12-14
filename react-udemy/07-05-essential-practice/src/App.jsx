import Header from './components/Header';
import Result from './components/Result';
import UserInput from './components/UserInput';

function App() {
    return (
        <>
            <Header />
            <main>
                <UserInput />
                <Result/>
            </main>
        </>
    );
}

export default App;
