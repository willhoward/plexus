import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header';
import './index.scss';

const Page = ({ children }) => (
	<div className="page">
		<div className="page_inner">
			<Header />
			<div className="inner_content">
				{ children }
			</div>
		</div>
	</div>
);

export default Page;

Page.propTypes = {
	children: PropTypes.node,
};

Page.defaultProps = {
	children: <></>,
};
