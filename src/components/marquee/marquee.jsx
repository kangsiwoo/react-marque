import { useEffect, useRef, useState } from 'react'
import './marquee.css'
import PropTypes from "prop-types"

const Marquee = ({ text, speed, gap }) => {
    const marqueeRef = useRef(null)
    const [numCopies, setNumCopies] = useState(1)

    useEffect(() => {
        const updateNumCopies = () => {
            const marqueeWidth = marqueeRef.current.parentElement.clientWidth
            const textWidth = marqueeRef.current.children[0].clientWidth
            const num = Math.ceil(marqueeWidth / (textWidth + gap))
            setNumCopies(num + 1)
        }

        updateNumCopies()
        window.addEventListener('resize', updateNumCopies)

        return () => window.removeEventListener('resize', updateNumCopies)
    }, [gap])

    useEffect(() => {
        const marqueeElement = marqueeRef.current
        let scrollAmount = 0

        const scrollMarquee = () => {
            scrollAmount -= 1
            if (scrollAmount <= -(marqueeElement.scrollWidth / numCopies)) {
                scrollAmount = 0
            }
            marqueeElement.style.transform = `translateX(${scrollAmount}px)`
        }

        const intervalId = setInterval(scrollMarquee, speed)

        return () => clearInterval(intervalId)
    }, [speed, numCopies])

    const content = []
    for (let i = 0; i < numCopies; i++) {
        content.push(<div key={i} gap={{gap}}>{text}</div>)
    }

    return (
        <div id="com-clxxthyng-marquee">
            <div ref={marqueeRef}>
                {content}
            </div>
        </div>
    )
}

Marquee.propTypes = {
    text: PropTypes.string.isRequired,
    speed: PropTypes.number,
    gep: PropTypes.number,
}

export default Marquee
