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
		storeType,
		updateStoreType,
		storeDetails,
		updateStoreDetails,
		updateFormOneValid,
	} = useContext(Context);

	useEffect(() => {
		setValue('storeType', storeType);
		setValue('storeDetails', storeDetails);
	}, []);

	const onSubmit = (data) => {
		updateStoreType(data.storeType);
		updateStoreDetails(data.storeDetails || '');
		updateFormOneValid(true);
		history.push('/two');
	};

	return (
		<Page header>
			<h1>Store details</h1>
			<Spacer direction="vertical" size="medium" />
			<form onSubmit={handleSubmit(onSubmit)}>
				<Input label="Store type" required>
					<select name="storeType" ref={register({ required: true })}>
						<option value="">Select...</option>
						<option value="mall">Mall</option>
						<option value="metro">Metro</option>
						<option value="arcade">Arcade</option>
						<option value="centre">Centre</option>
					</select>
				</Input>
				{ errors.storeType && (
					<>
						<Spacer direction="vertical" size="small" />
						<p className="error">This field is required.</p>
						<Spacer direction="vertical" size="small" />
					</>
				)}
				<div className={watch('storeType') === 'metro' ? '' : 'hidden'}>
					<Spacer direction="vertical" size="medium" />
					<Input label="Provide details" required>
						<input type="text" id="storeDetails" name="storeDetails" ref={register({ required: watch('storeType') === 'metro' })} />
					</Input>
				</div>
				{ errors.storeDetails && (
					<>
						<Spacer direction="vertical" size="small" />
						<p className="error">This field is required.</p>
						<Spacer direction="vertical" size="small" />
					</>
				)}
				{ !errors.storeType && !errors.storeDetails && (
					<Spacer direction="vertical" size="large" />
				)}
				<Button type="submit">
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
