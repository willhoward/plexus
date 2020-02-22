import React, { useContext } from 'react';
import {
	BrowserRouter,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import Context from './context';
import FormOne from '../pages/form-one';
import FormTwo from '../pages/form-two';
import FormSubmit from '../pages/form-submit';
import Submitted from '../pages/submitted';

const Router = () => {
	const { formOneValid, formTwoValid, formSubmitted } = useContext(Context);

	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/one" component={FormOne} />
				<Route exact path="/two" render={() => (formOneValid ? <FormTwo /> : <Redirect to="/one" />)} />
				<Route exact path="/submit" render={() => ((formOneValid && formTwoValid) ? <FormSubmit /> : <Redirect to="/one" />)} />
				<Route exact path="/submitted" render={() => (formSubmitted ? <Submitted /> : <Redirect to="/one" />)} />
				<Route render={() => <Redirect to="/one" />} />
			</Switch>
		</BrowserRouter>
	);
};

export default Router;
