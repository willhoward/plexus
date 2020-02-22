import React, { useContext } from 'react';
import Context from '../../utils/context';
import Flex, { FlexEqual } from '../flex';
import FormOne from '../form-one';
import FormTwo from '../form-two';
import './index.scss';

const FormCarousel = () => {
	const { page } = useContext(Context);

	return (
		<div className="form_carousel" style={{ transform: `translateX(-${page * 50}%)` }}>
			<Flex>
				<FlexEqual className="form_page">
					<FormOne />
				</FlexEqual>
				<FlexEqual className="form_page">
					<FormTwo />
				</FlexEqual>
			</Flex>
		</div>
	);
};

export default FormCarousel;
