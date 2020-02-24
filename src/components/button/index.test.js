/* eslint-disable no-undef */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './index';

test('button text renders', () => {
	const props = {
		children: 'Example button',
	};
	const { getByText } = render(<Button {...props} />);
	const text = getByText(/Example button/i);
	expect(text).toBeInTheDocument();
});

test('button can be disabled', () => {
	const props = {
		disabled: true,
	};
	const { getByTestId } = render(<Button {...props} />);
	const button = getByTestId('button');
	expect(button).toHaveAttribute('disabled');
});

test('button callback fires on click', () => {
	let triggered = false;
	const props = {
		onClick: () => { triggered = true; },
	};
	const { getByTestId } = render(<Button {...props} />);
	const button = getByTestId('button');
	fireEvent.click(button);
	expect(triggered).toEqual(true);
});
