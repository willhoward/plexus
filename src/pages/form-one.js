import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Context from '../utils/context';
import Page from '../components/page';
import Input from '../components/input';
import Button from '../components/button';
import Spacer from '../components/spacer';

const FormOne = ({ history }) => {
	const {
		register,
		handleSubmit,
		watch,
		errors,
		setValue,
	} = useForm();
	const {
		updatePage,
		storeType,
		updateStoreType,
		storeDetails,
		updateStoreDetails,
	} = useContext(Context);

	useEffect(() => {
		setValue('storeType', storeType);
		setValue('storeDetails', storeDetails);
	}, []);

	const onSubmit = (data) => {
		updateStoreType(data.storeType);
		updateStoreDetails(data.storeDetails || '');
		history.push('/two');
	};

	return (
		<Page>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Input label="Store type">
					<select name="storeType" ref={register}>
						<option value="mall">Mall</option>
						<option value="metro">Metro</option>
						<option value="arcade">Arcade</option>
						<option value="centre">Centre</option>
					</select>
				</Input>
				{ watch('storeType') === 'metro' && (
					<>
						<Spacer direction="vertical" size="medium" />
						<Input label="Provide details">
							<input type="text" id="storeDetails" name="storeDetails" ref={register} />
						</Input>
					</>
				)}
				<Spacer direction="vertical" size="large" />
				<Button
					type="submit"
					priority="primary"
				>
					Continue
				</Button>
			</form>
		</Page>
	);
};

export default withRouter(FormOne);

FormOne.propTypes = {
	history: PropTypes.object.isRequired,
};
