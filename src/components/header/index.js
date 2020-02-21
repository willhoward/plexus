import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Flex, { FlexItem, FlexEqual } from '../flex';

const Header = ({ history }) => (
	<Flex className="header">
		<FlexEqual />
		<FlexItem>
			<p>Page One</p>
		</FlexItem>
		<FlexItem>
			<p>Page Two</p>
		</FlexItem>
		<FlexEqual />
	</Flex>
);

export default withRouter(Header);

Header.propTypes = {
	history: PropTypes.object.isRequired,
};
