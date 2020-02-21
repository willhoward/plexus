import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const Spacer = ({ size, direction }) => (
	<div className={`spacer ${direction} ${size}`} />
);

export default Spacer;

Spacer.propTypes = {
	size: PropTypes.string,
	direction: PropTypes.string,
};

Spacer.defaultProps = {
	size: 'medium',
	direction: 'vertical',
};
