import { useEffect, useRef } from 'react'
import './marquee.css'
import PropTypes from "prop-types";

const Marquee = ({ text, speed }) => {
    const marqueeRef = useRef(null)

    useEffect(() => {
        const marqueeElement = marqueeRef.current
        let scrollAmount = 0

        const scrollMarquee = () => {
            scrollAmount -= 1;
            if (scrollAmount <= -marqueeElement.clientWidth) {
                scrollAmount = marqueeElement.parentElement.clientWidth
            }
            marqueeElement.style.transform = `translateX(${scrollAmount}px)`
        }

        const intervalId = setInterval(scrollMarquee, speed)

        return () => clearInterval(intervalId)
    }, [speed])

    return (
        <div id="com-clxxthyng-marquee">
            <div ref={marqueeRef}>
                <div>{text}</div>
            </div>
        </div>
    )
}

Marquee.propTypes = {
    text: PropTypes.string.isRequired,
    speed: PropTypes.number.isRequired,
}

export default Marquee;
