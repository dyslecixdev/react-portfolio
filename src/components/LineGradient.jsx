import PropTypes from 'prop-types';

function LineGradient({width = 'w-full'}) {
	return <div className={`h-0.5 ${width} bg-gradient-rainblue`} />;
}

LineGradient.propTypes = {
	width: PropTypes.string.isRequired
};

export default LineGradient;