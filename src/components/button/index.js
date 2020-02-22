import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const Button = ({
	children,
	type,
	onClick,
	disabled,
	priority,
}) => (
	<button
		type={type}
		className={priority}
		onClick={onClick}
		disabled={disabled}
	>
		{ children }
	</button>
);

export default Button;

Button.propTypes = {
	children: PropTypes.node,
	type: PropTypes.string,
	onClick: PropTypes.func,
	disabled: PropTypes.bool,
	priority: PropTypes.string,
};

Button.defaultProps = {
	children: <></>,
	type: 'button',
	onClick: () => {},
	disabled: false,
	priority: 'primary',
};
