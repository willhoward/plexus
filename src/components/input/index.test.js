/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import Input from './index';

test('input label is present', () => {
	const props = {
		label: 'Example input',
	};
	const { getByTestId } = render(<Input {...props} />);
	const label = getByTestId('label');
	expect(label).toBeInTheDocument();
});

test('child input is accessible', () => {
	const props = {
		children: <input type="text" data-testid="input" />,
	};
	const { getByTestId } = render(<Input {...props} />);
	const input = getByTestId('input');
	expect(input).not.toHaveAttribute('disabled');
});

test('indicator is shown when input is required', () => {
	const props = {
		required: true,
	};
	const { getByTestId } = render(<Input {...props} />);
	const required = getByTestId('required');
	expect(required).toBeInTheDocument();
});
