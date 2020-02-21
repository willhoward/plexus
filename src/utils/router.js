import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Provider from './provider';
import FormPageOne from '../pages/form-page-one';
import FormPageTwo from '../pages/form-page-two';

const Router = () => (
	<BrowserRouter>
		<Provider>
			<Switch>
				<Route exact path="/page-one" component={FormPageOne} />
				<Route exact path="/page-two" component={FormPageTwo} />
			</Switch>
		</Provider>
	</BrowserRouter>
);

export default Router;
