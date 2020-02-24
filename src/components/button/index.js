import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const Button = ({
	children,
	type,
	onClick,
	disabled,
}) => (
	<button
		type={type}
		className="button"
		onClick={onClick}
		disabled={disabled}
		data-testid="button"
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
};

Button.defaultProps = {
	children: <></>,
	type: 'button',
	onClick: () => {},
	disabled: false,
};
