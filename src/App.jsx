import Marquee from './components/marquee/marquee.tsx';
import './index.css';

const App = () => {
    return (
        <div className="App">
            <Marquee text="Sample." speed={10} gap={20} />
        </div>
    );
}

export default App;
