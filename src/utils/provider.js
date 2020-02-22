import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './context';

const Provider = ({ children }) => {
	const [storeType, updateStoreType] = useState('');
	const [storeDetails, updateStoreDetails] = useState('');
	const [firstName, updateFirstName] = useState('');
	const [lastName, updateLastName] = useState('');
	const [formOneValid, updateFormOneValid] = useState(false);
	const [formTwoValid, updateFormTwoValid] = useState(false);
	const [formSubmitted, updateFormSubmitted] = useState(false);

	return (
		<Context.Provider
			value={{
				storeType,
				updateStoreType: (v) => updateStoreType(v),
				storeDetails,
				updateStoreDetails: (v) => updateStoreDetails(v),
				firstName,
				updateFirstName: (v) => updateFirstName(v),
				lastName,
				updateLastName: (v) => updateLastName(v),
				formOneValid,
				updateFormOneValid: (v) => updateFormOneValid(v),
				formTwoValid,
				updateFormTwoValid: (v) => updateFormTwoValid(v),
				formSubmitted,
				updateFormSubmitted: (v) => updateFormSubmitted(v),
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
