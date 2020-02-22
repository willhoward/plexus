import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Flex, { FlexEqual } from '../flex';
import Tab from '../tab';
import './index.scss';

const Header = ({ history, location }) => (
	<Flex className="header">
		<FlexEqual>
			<Tab
				direction="horizontal"
				position="first"
				textAlign="center"
				onClick={() => history.push('/one')}
				active={location.pathname === '/one'}
			>
				1
			</Tab>
		</FlexEqual>
		<FlexEqual>
			<Tab
				direction="horizontal"
				position="middle"
				textAlign="center"
				active={location.pathname === '/two'}
				disabled={location.pathname === '/one'}
			>
				2
			</Tab>
		</FlexEqual>
		<FlexEqual>
			<Tab
				direction="horizontal"
				position="last"
				textAlign="center"
				active={location.pathname === '/submit'}
				disabled={location.pathname !== '/submit'}
			>
				3
			</Tab>
		</FlexEqual>
	</Flex>
);

export default withRouter(Header);

Header.propTypes = {
	history: PropTypes.object.isRequired,
	location: PropTypes.object.isRequired,
};
