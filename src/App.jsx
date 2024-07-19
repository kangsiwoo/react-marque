import Marquee from './components/marquee/marquee.jsx';
import './index.css';

const App = () => {
    return (
        <div className="App">
            <Marquee text="여기에 당신의 문구를 입력하세요." speed={1} />
        </div>
    );
}

export default App;
