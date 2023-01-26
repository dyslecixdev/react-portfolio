import PropTypes from 'prop-types';

function LineGradient({width}) {
	return <div className={`h-0.5 ${width} bg-gradient-rainbow`} />;
}

// Giving width a default prop.
LineGradient.defaultProps = {
	width: 'w-full'
};

LineGradient.propTypes = {
	width: PropTypes.string
};

export default LineGradient;
