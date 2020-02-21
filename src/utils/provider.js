import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './context';

const Provider = ({ children }) => {
	return (
		<Context.Provider
			value={{

			}}
		>
			{ children }
		</Context.Provider>
	);
}

export default Provider;

Provider.propTypes = {
	children: PropTypes.node,
};

Provider.defaultProps = {
	children: <></>,
};
