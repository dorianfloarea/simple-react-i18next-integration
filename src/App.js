import logo from './logo.svg';
import './App.css';
import {useTranslation} from 'react-i18next';

function App() {
    const {t} = useTranslation();
    const name = 'Dorian';

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    {t('welcome_msg')}
                </p>
                <p>
                    {t('my_name', {name})}
                </p>
            </header>
        </div>
    );
}

export default App;
