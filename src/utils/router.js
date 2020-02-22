import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Provider from './provider';
import FormOne from '../pages/form-one';
import FormTwo from '../pages/form-two';
import FormSubmit from '../pages/form-submit';

const Router = () => (
	<BrowserRouter>
		<Provider>
			<Switch>
				<Route exact path="/one" component={FormOne} />
				<Route exact path="/two" component={FormTwo} />
				<Route exact path="/submit" component={FormSubmit} />
			</Switch>
		</Provider>
	</BrowserRouter>
);

export default Router;
