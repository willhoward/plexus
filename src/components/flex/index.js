import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const Flex = ({ children, direction, className }) => (
	<div className={`flex ${direction} ${className}`}>
		{ children }
	</div>
);

export default Flex;

Flex.propTypes = {
	children: PropTypes.node,
	direction: PropTypes.string,
	className: PropTypes.string,
};

Flex.defaultProps = {
	children: <></>,
	direction: 'horizontal',
	className: '',
};

export const FlexItem = ({ children, className }) => (
	<div className={`flex_item ${className}`}>
		{ children }
	</div>
);

FlexItem.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
};

FlexItem.defaultProps = {
	children: <></>,
	className: '',
};

export const FlexEqual = ({ children, className }) => (
	<div className={`flex_equal ${className}`}>
		{ children }
	</div>
);

FlexEqual.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
};

FlexEqual.defaultProps = {
	children: <></>,
	className: '',
};

export const FlexSpace = ({ children, className }) => (
	<div className={`flex_space ${className}`}>
		{ children }
	</div>
);

FlexSpace.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
};

FlexSpace.defaultProps = {
	children: <></>,
	className: '',
};