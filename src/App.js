import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';

import Intro from './Intro';

import './App.scss';
import Navbar from './Navbar';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			introLoaded: false
		};
	}

	render() {
		const { introLoaded } = this.state;

		if (!introLoaded)
			return <Intro setIntroCompleted={() => this.setState({ introLoaded: true })} />;

		return (
			<div>
				<Navbar />
				<div className="pagesContainer">
					<About />
					<Projects />
					<Contact />
				</div>
			</div>
		);
	}
}

export default App;
