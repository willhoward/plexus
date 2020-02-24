import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const Tab = ({
	children,
	direction,
	position,
	onClick,
	disabled,
	textAlign,
	active,
	...props
}) => (
	<button
		type="button"
		className={`tab ${position}
		${direction} text_${textAlign}
		${active ? 'active' : ''}`}
		onClick={onClick}
		disabled={disabled}
		{...props}
	>
		{ children }
	</button>
);

export default Tab;

Tab.propTypes = {
	children: PropTypes.node,
	direction: PropTypes.string,
	position: PropTypes.string,
	onClick: PropTypes.func,
	disabled: PropTypes.bool,
	textAlign: PropTypes.string,
	active: PropTypes.bool,
};

Tab.defaultProps = {
	children: <></>,
	direction: 'horizontal',
	position: 'only',
	onClick: () => {},
	disabled: false,
	textAlign: 'center',
	active: false,
};
