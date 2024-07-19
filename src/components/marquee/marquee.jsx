import PropTypes from 'prop-types';

const Marquee = ({ element }) => {

    return (
        <div id="com-clxxthyng-marquee">
            <div>{element}</div>
        </div>
    );
}

Marquee.propTypes = {
    element: PropTypes.node.isRequired
}

export default Marquee;