import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Provider from './provider';
import FormOne from '../pages/form-one';
import FormTwo from '../pages/form-two';

const Router = () => (
	<BrowserRouter>
		<Provider>
			<Switch>
				<Route exact path="/one" component={FormOne} />
				<Route exact path="/two" component={FormTwo} />
			</Switch>
		</Provider>
	</BrowserRouter>
);

export default Router;
