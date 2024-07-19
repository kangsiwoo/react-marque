import './App.css'
import Marquee from "./components/marquee/marquee.jsx";

function App() {
    const element = <h1>text</h1>


    return (
        <>
          <Marquee element={element}
                   width={100}/>
        </>
    )
}

export default App
