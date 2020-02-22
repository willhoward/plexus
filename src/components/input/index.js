import React from 'react';
import PropTypes from 'prop-types';
import Spacer from '../spacer';
import './index.scss';

const Input = ({ children, label }) => (
	<div>
		<p>{ label }</p>
		<Spacer size="small" direction="vertical" />
		{ children }
	</div>
);

export default Input;

Input.propTypes = {
	children: PropTypes.node,
	label: PropTypes.string,
};

Input.defaultProps = {
	children: <></>,
	label: '',
};
