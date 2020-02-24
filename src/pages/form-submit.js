import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Axios from 'axios';
import Context from '../utils/context';
import Flex, { FlexEqual, FlexItem } from '../components/flex';
import Page from '../components/page';
import Button from '../components/button';
import Spacer from '../components/spacer';
import URLs from '../utils/urls.json';

const FormSubmit = ({ history }) => {
	const {
		storeType,
		storeDetails,
		firstName,
		lastName,
		updateFormSubmitted,
	} = useContext(Context);

	const submitForm = async () => {
		try {
			const body = {
				storeType,
				storeDetails,
				firstName,
				lastName,
			};
			const options = {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				data: JSON.stringify(body),
				url: URLs.submitForm,
			};
			const response = await Axios(options);

			console.log('Form submission response: ', response);
		} catch (error) {
			console.log(error);
		}
		updateFormSubmitted(true);
		history.push('/submitted');
	};

	return (
		<Page header>
			<h1>Submit form</h1>
			<Spacer direction="vertical" size="medium" />
			<p>Here are the details you&#8217;ve provided:</p>
			<br />
			<ul>
				<li>
					<b>Store type: </b>
					<span style={{ textTransform: 'capitalize' }}>{ storeType }</span>
				</li>
				{storeType === 'metro' && (
					<li>
						<b>Store details: </b>
						{ storeDetails }
					</li>
				)}
				<li>
					<b>First name: </b>
					{ firstName }
				</li>
				<li>
					<b>Last name: </b>
					{ lastName }
				</li>
			</ul>
			<Spacer direction="vertical" size="large" />
			<Flex>
				<FlexEqual>
					<Button onClick={() => history.push('/two')}>Back</Button>
				</FlexEqual>
				<FlexItem>
					<Spacer direction="horizontal" size="medium" />
				</FlexItem>
				<FlexEqual>
					<Button onClick={submitForm}>Submit</Button>
				</FlexEqual>
			</Flex>
		</Page>
	);
};

export default withRouter(FormSubmit);

FormSubmit.propTypes = {
	history: PropTypes.object.isRequired,
};
