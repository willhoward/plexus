import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header';
import './index.scss';

const Page = ({ children, header }) => (
	<div className="page">
		<div className="page_inner">
			{ header && <Header />}
			<div className="inner_content">
				{ children }
			</div>
		</div>
	</div>
);

export default Page;

Page.propTypes = {
	children: PropTypes.node,
	header: PropTypes.bool,
};

Page.defaultProps = {
	children: <></>,
	header: false,
};
