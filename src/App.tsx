import React from 'react';
import Marquee from './components/marquee/marquee';

class App extends React.Component {
    render() {
        return (
            <div>
                <Marquee
                    text="Hello, world!"
                    gap={0.1}
                    loop={true}
                    pause={false}
                />
            </div>
        );
    }
}

export default App;