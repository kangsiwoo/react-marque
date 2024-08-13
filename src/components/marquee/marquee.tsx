import { useEffect, useRef, useState } from 'react';
import './marquee.css';
import PropTypes from "prop-types";

interface MarqueeProps {
    text: string;
    speed?: number;
    gap?: number;
}

const Marquee: React.FC<MarqueeProps> = ({ text, speed = 50, gap = 20 }) => {
    const marqueeRef = useRef<HTMLDivElement>(null);
    const [numCopies, setNumCopies] = useState(1);

    useEffect(() => {
        const updateNumCopies = () => {
            const marqueeWidth = marqueeRef.current?.parentElement?.clientWidth || 0;
            const textWidth = marqueeRef.current?.children[0].clientWidth || 0;
            const num = Math.ceil(marqueeWidth / (textWidth + gap));
            setNumCopies(num + 1);
        };

        updateNumCopies();
        window.addEventListener('resize', updateNumCopies);

        return () => window.removeEventListener('resize', updateNumCopies);
    }, [gap]);

    useEffect(() => {
        const marqueeElement = marqueeRef.current;
        let scrollAmount = 0;

        const scrollMarquee = () => {
            scrollAmount -= 1;
            if (scrollAmount <= -(marqueeElement?.scrollWidth / numCopies || 0)) {
                scrollAmount = 0;
            }
            marqueeElement?.style.setProperty('transform', `translateX(${scrollAmount}px)`);
        };

        const intervalId = setInterval(scrollMarquee, speed);

        return () => clearInterval(intervalId);
    }, [speed, numCopies]);

    const content = [];
    for (let i = 0; i < numCopies; i++) {
        content.push(
            <div key={i} style={{ marginRight: gap }}>
                {text}
            </div>
        );
    }

    return (
        <div id="com-clxxthyng-marquee">
            <div ref={marqueeRef}>{content}</div>
        </div>
    );
};

Marquee.propTypes = {
    text: PropTypes.string.isRequired,
    speed: PropTypes.number,
    gap: PropTypes.number,
};

export default Marquee;
