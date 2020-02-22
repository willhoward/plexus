import React, { useState } from 'react';
import Axios from 'axios';
import { useForm } from 'react-hook-form';
import Page from '../components/page';
import Input from '../components/input';
import Flex, { FlexItem, FlexEqual } from '../components/flex';
import Spacer from '../components/spacer';
import Button from '../components/button';

const FormTwo = () => {
	const {
		register,
		handleSubmit,
		watch,
		errors,
		setValue,
	} = useForm();

	const [names, updateNames] = useState([]);
	const [highlightedNames, updateHighlightedNames] = useState([]);

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
				const results = await Axios.get('https://randomuser.me/api/?results=50&nat=au&exc=login');
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
		updateHighlightedNames([]);
		setValue('userLookup', '');
		setValue('firstName', name.split(' ')[0]);
		setValue('lastName', name.split(' ')[1]);
	};

	const onSubmit = (data) => console.log(data);

	return (
		<Page>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Input label="User lookup">
					<input type="text" id="userLookup" name="userLookup" ref={register} onChange={lookup} />
				</Input>
				<Spacer direction="vertical" size="medium" />
				{ highlightedNames.map((name) => (
					<>
						<Button type="button" priority="secondary" key={name} onClick={() => selectName(name)}>{ name }</Button>
						<Spacer direction="vertical" size="medium" />
					</>
				))}
				<Flex>
					<FlexEqual>
						<Input label="First name">
							<input type="text" id="firstName" name="firstName" ref={register} disabled />
						</Input>
					</FlexEqual>
					<FlexItem>
						<Spacer size="horizontal" direction="medium" />
					</FlexItem>
					<FlexEqual>
						<Input label="Last name">
							<input type="text" id="lastName" name="lastName" ref={register} disabled />
						</Input>
					</FlexEqual>
				</Flex>
				<Spacer direction="vertical" size="large" />
				<Button type="submit" priority="primary">Submit</Button>
			</form>
		</Page>
	);
};

export default FormTwo;
