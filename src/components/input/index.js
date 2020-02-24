import React from 'react';
import PropTypes from 'prop-types';
import Spacer from '../spacer';
import './index.scss';

const Input = ({ children, label, required }) => (
	<div>
		<p data-testid="label">
			{ label }
			{' '}
			{required && (<sup data-testid="required"><span className="error">*</span></sup>)}
		</p>
		<Spacer size="small" direction="vertical" />
		{ children }
	</div>
);

export default Input;

Input.propTypes = {
	children: PropTypes.node,
	label: PropTypes.string,
	required: PropTypes.bool,
};

Input.defaultProps = {
	children: <></>,
	label: '',
	required: false,
};
