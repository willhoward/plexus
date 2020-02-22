import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './context';

const Provider = ({ children }) => {
	const [storeType, updateStoreType] = useState('mall');
	const [storeDetails, updateStoreDetails] = useState('');

	return (
		<Context.Provider
			value={{
				storeType,
				updateStoreType: (v) => updateStoreType(v),
				storeDetails,
				updateStoreDetails: (v) => updateStoreDetails(v),
			}}
		>
			{children}
		</Context.Provider>
	);
};

export default Provider;

Provider.propTypes = {
	children: PropTypes.node,
};

Provider.defaultProps = {
	children: <></>,
};
