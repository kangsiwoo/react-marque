import Marquee from './components/marquee/marquee.jsx';
import './index.css';

const App = () => {
    return (
        <div className="App">
            <Marquee text="Enter your text." speed={10} gap={20} />
        </div>
    );
}

export default App;
