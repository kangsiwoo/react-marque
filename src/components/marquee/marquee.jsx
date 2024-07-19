import PropTypes from 'prop-types';

const Marquee = ({ element, width, id }) => {

    const count = Math.ceil(window.innerWidth / width)
    console.log(count)
    const elements = []
    for (let i = 0; i < count; i++) {
        elements.push(element)
    }

    return (
        <div id="com-clxxthyng-marquee">
            <div style={{width: `${width}px`}}>
                {
                    elements.map((e, index) => (
                        <div key={`${id}-${index}`}>{e}</div>
                    ))
                }
            </div>
        </div>
    );
}

Marquee.propTypes = {
    element: PropTypes.node.isRequired,
    width: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
}

export default Marquee;