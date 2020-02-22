import React from 'react';
import ReactDOM from 'react-dom';
import Provider from './utils/provider';
import Router from './utils/router';
import './index.scss';

ReactDOM.render(<Provider><Router /></Provider>, document.getElementById('root'));
