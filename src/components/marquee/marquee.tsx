import { useEffect, useRef, useState } from 'react';
import './marquee.css';
import PropTypes from 'prop-types';
import React from 'react';

interface MarqueeProps {
    text: string;
    speed?: number;
    gap?: number;
    direction?: 'left' | 'right';
    loop?: boolean;
    pause?: boolean;
}

const Marquee: React.FC<MarqueeProps> = ({
                                             text,
                                             speed = 10,
                                             gap = 20,
                                             direction = 'left',
                                             loop = true,
                                             pause = false,
                                         }) => {
    const marqueeRef = useRef<HTMLDivElement>(null);
    const [numCopies, setNumCopies] = useState(1);
    const [scrollAmount, setScrollAmount] = useState(0);

    useEffect(() => {
        const updateNumCopies = () => {
            const marqueeContainer = marqueeRef.current?.parentElement;
            const marqueeElement = marqueeRef.current;

            if (!marqueeContainer || !marqueeElement) return;

            const marqueeWidth = marqueeContainer.clientWidth;
            const textWidth = marqueeElement.children[0].clientWidth;
            const num = Math.ceil(marqueeWidth / (textWidth + gap));
            setNumCopies(num + 1);
        };

        updateNumCopies();
        window.addEventListener('resize', updateNumCopies);

        return () => window.removeEventListener('resize', updateNumCopies);
    }, [gap]);

    useEffect(() => {
        const marqueeElement = marqueeRef.current;

        if (!marqueeElement) return;

        const scrollMarquee = () => {
            if (!pause) {
                const totalWidth = marqueeElement.scrollWidth / numCopies;
                setScrollAmount((prevScrollAmount) => {
                    const newScrollAmount = prevScrollAmount - (direction === 'left' ? 1 : -1);
                    return loop ? newScrollAmount % -totalWidth : Math.max(newScrollAmount, -totalWidth);
                });
            }
        };

        const animationFrame = () => {
            scrollMarquee();
            requestAnimationFrame(animationFrame);
        };

        requestAnimationFrame(animationFrame);
    }, [speed, numCopies, direction, loop, pause]);

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
            <div ref={marqueeRef} style={{ transform: `translateX(${scrollAmount}px)` }}>
                {content}
            </div>
        </div>
    );
};

Marquee.propTypes = {
    text: PropTypes.string.isRequired,
    gap: PropTypes.number,
    loop: PropTypes.bool,
    pause: PropTypes.bool,
};

export default Marquee;