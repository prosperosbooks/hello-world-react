import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Hello from './Hello';
import 'tachyons';

ReactDOM.render(<Hello greeting={'Hello' + 'React ninja'}/>, document.getElementById('root'));
registerServiceWorker();
