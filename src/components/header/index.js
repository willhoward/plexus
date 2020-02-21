import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Flex, { FlexItem, FlexEqual } from '../flex';
import Button from '../button';
import Spacer from '../spacer';
import './index.scss';

const Header = ({ history }) => (
	<Flex className="header">
		<FlexEqual>
			<Button onClick={() => history.push('/page-one')} type="secondary">Page One</Button>
		</FlexEqual>
		<FlexItem>
			<Spacer direction="horizontal" size="medium" />
		</FlexItem>
		<FlexEqual>
			<Button onClick={() => history.push('/page-two')} type="secondary">Page Two</Button>
		</FlexEqual>
	</Flex>
);

export default withRouter(Header);

Header.propTypes = {
	history: PropTypes.shape.isRequired,
};
