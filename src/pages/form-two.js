import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Axios from 'axios';
import { useForm } from 'react-hook-form';
import Context from '../utils/context';
import Page from '../components/page';
import Input from '../components/input';
import Flex, { FlexItem, FlexEqual } from '../components/flex';
import Spacer from '../components/spacer';
import Button from '../components/button';
import Tab from '../components/tab';
import URLs from '../utils/urls.json';

const FormTwo = ({ history }) => {
	const {
		register,
		handleSubmit,
		errors,
		setValue,
	} = useForm();

	const [names, updateNames] = useState([]);
	const [highlightedNames, updateHighlightedNames] = useState([]);
	const {
		firstName,
		updateFirstName,
		lastName,
		updateLastName,
		updateFormTwoValid,
	} = useContext(Context);

	useEffect(() => {
		setValue('firstName', firstName);
		setValue('lastName', lastName);
	}, []);

	const setHighlightedNames = (namesToFilter, term) => {
		if (term.length) {
			const filteredNames = namesToFilter.filter((name) => (
				name.toLowerCase().indexOf(term.toLowerCase()) > -1
			));
			updateHighlightedNames(filteredNames);
		} else {
			updateHighlightedNames([]);
		}
	};

	const lookup = async (e) => {
		const term = e.target.value;
		try {
			if (!names.length) {
				const results = await Axios.get(URLs.lookupUser);
				const namesArray = results.data.results.map((result) => `${result.name.first} ${result.name.last}`);
				setHighlightedNames(namesArray, term);
				updateNames(namesArray);
			} else {
				setHighlightedNames(names, term);
			}
		} catch (error) {
			console.log(error);
		}
	};

	const selectName = (name) => {
		const selectedFirstName = name.split(' ')[0];
		const selectedLastName = name.split(' ')[1];
		updateHighlightedNames([]);
		setValue('userLookup', '');
		setValue('firstName', selectedFirstName);
		setValue('lastName', selectedLastName);
		updateFirstName(selectedFirstName);
		updateLastName(selectedLastName);
	};

	const findPosition = (index) => {
		if (highlightedNames.length === 1) {
			return 'only';
		}

		if (index === 0) {
			return 'first';
		}

		if (index === highlightedNames.length - 1) {
			return 'last';
		}

		return 'middle';
	};

	const onSubmit = (data) => {
		updateFirstName(data.firstName);
		updateLastName(data.lastName);
		updateFormTwoValid(true);
		history.push('/submit');
	};

	return (
		<Page header>
			<h1>User details</h1>
			<Spacer direction="vertical" size="medium" />
			<form onSubmit={handleSubmit(onSubmit)}>
				<Input label="User lookup">
					<input type="text" id="userLookup" name="userLookup" ref={register} onChange={lookup} />
				</Input>
				<Spacer direction="vertical" size="medium" />
				{ highlightedNames.length > 0 && (
					<>
						{ highlightedNames.map((name, index) => (
							<Tab
								key={name}
								direction="vertical"
								position={findPosition(index)}
								onClick={() => selectName(name)}
								textAlign="left"
							>
								{ name }
							</Tab>
						))}
						<Spacer direction="vertical" size="medium" />
					</>
				)}
				<Input label="First name" required>
					<input type="text" id="firstName" name="firstName" ref={register({ required: true })} disabled />
				</Input>
				{ errors.firstName ? (
					<>
						<Spacer direction="vertical" size="small" />
						<p className="error">A first name is required.</p>
						<Spacer direction="vertical" size="small" />
					</>
				) : (
					<Spacer direction="vertical" size="medium" />
				)}
				<Input label="Last name" required>
					<input type="text" id="lastName" name="lastName" ref={register({ required: true })} disabled />
				</Input>
				{ errors.lastName ? (
					<>
						<Spacer direction="vertical" size="small" />
						<p className="error">A last name is required.</p>
						<Spacer direction="vertical" size="small" />
					</>
				) : (
					<Spacer direction="vertical" size="large" />
				)}
				<Flex>
					<FlexEqual>
						<Button type="button" onClick={() => history.push('/one')}>Back</Button>
					</FlexEqual>
					<FlexItem>
						<Spacer direction="horizontal" size="medium" />
					</FlexItem>
					<FlexEqual>
						<Button type="submit">Continue</Button>
					</FlexEqual>
				</Flex>
			</form>
		</Page>
	);
};

export default withRouter(FormTwo);

FormTwo.propTypes = {
	history: PropTypes.object.isRequired,
};
