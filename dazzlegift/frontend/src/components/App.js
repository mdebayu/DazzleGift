import React, { Component , Fragment } from 'react';
import ReactDOM from 'react-dom';

import Header from './layout/Header';
import Dashboard from './products/Dashboard'

class App extends Component {

	render() {
		return (
			<Fragment>

				<Header />
				<div classname="container">
					<Dashboard />
				</div>
			</Fragment>

			);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));