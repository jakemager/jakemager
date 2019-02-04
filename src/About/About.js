import React, { Component } from 'react';

import './About.scss';
import SoftwareAbout from './SoftwareAbout';
import Activities from './Activities';

export default class About extends Component {
	constructor(props) {
		super(props);

		this.state = {
			scrollY: 0
		};
	}

	componentDidMount() {
		const aboutContainer = document.getElementById('aboutContainer');
		aboutContainer.addEventListener('mousewheel', e => this.center(e), false);
		aboutContainer.addEventListener('DOMMouseScroll', e => this.center(e), false); // Firefox
	}

	componentWillUnmount() {
		const aboutContainer = document.getElementById('aboutContainer');
		aboutContainer.removeEventListener('mousewheel', e => this.center(e), false);
		aboutContainer.removeEventListener('DOMMouseScroll', e => this.center(e), false); // Firefox
	}

	center = e => {
		const { scrollY } = this.state;

		if (scrollY < 65) e.preventDefault();

		if (e.deltaY > 0 && scrollY < 65) this.setState({ scrollY: scrollY + 1 });
		else if (e.deltaY < 0 && scrollY > -25) this.setState({ scrollY: scrollY - 1 });
	};

	renderScrollIndicators = () => {
		const { scrollY } = this.state;
		let arrow = [];

		const level = parseInt(scrollY / 5);

		console.log(level, scrollY);

		for (let i = 0; i < level && i < 9; i++) {
			arrow.push(<div key={i} className="vl" />);
		}

		if (!arrow.length) return <div className="vl" style={{ opacity: 0 }} />;
		return arrow;
	};

	render() {
		const { scrollY } = this.state;

		return (
			<div id="aboutContainer">
				<div style={{ display: 'flex', flexDirection: 'row' }}>{this.renderScrollIndicators()}</div>
				{scrollY < 30 ? <SoftwareAbout /> : <Activities />}
			</div>
		);
	}
}
