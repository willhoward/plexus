/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Page from './index';

test('page renders header when specified', () => {
	const props = {
		header: true,
	};
	const { getByTestId } = render(<Page {...props} />, { wrapper: MemoryRouter });
	const header = getByTestId('header');
	const tabOne = getByTestId('tabOne');
	const tabTwo = getByTestId('tabTwo');
	const tabThree = getByTestId('tabThree');
	expect(header).toBeInTheDocument();
	expect(tabOne).toBeInTheDocument();
	expect(tabTwo).toBeInTheDocument();
	expect(tabThree).toBeInTheDocument();
});

test('page renders child content', () => {
	const props = {
		children: <div data-testid="child" />,
	};
	const { getByTestId } = render(<Page {...props} />);
	const child = getByTestId('child');
	expect(child).toBeInTheDocument();
});
