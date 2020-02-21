import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const Button = ({ children, onClick, disabled, type }) => (
	<button className={type} onClick={onClick} disabled={disabled}>
		{ children }
	</button>
);

export default Button;

Button.propTypes = {
	children: PropTypes.node,
	onClick: PropTypes.func,
	disabled: PropTypes.bool,
	type: PropTypes.string,
};

Button.defaultProps = {
	children: <></>,
	onClick: () => {},
	disabled: false,
	type: 'primary',
};
