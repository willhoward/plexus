import React from 'react';
import Page from '../components/page';
import Button from '../components/button';

const FormSubmit = () => (
	<Page>
		<p>Submit form</p>
		<Button onClick={() => alert('Submitted!')}>Submit</Button>
	</Page>
);

export default FormSubmit;
