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

		this.styles = {
			duck: {
				backgroundImage: 'url(/about/duck.jpg)',
				backgroundSize: 'cover',
				backgroundPosition: 'top left'
			},
			explorer: {
				backgroundImage: 'url(/about/explorer.jpg)',
				backgroundSize: 'cover',
				backgroundPosition: 'bottom right'
			},
			fish: {
				backgroundImage: 'url(/about/fish.jpg)',
				backgroundSize: 'contain',
				backgroundPosition: 'center'
			},
			fitness: {
				backgroundImage: 'url(/about/fitness.jpg)',
				backgroundSize: 'cover'
			},
			snowboard: {
				backgroundImage: 'url(/about/snowboard.jpg)',
				backgroundSize: 'cover',
				backgroundPosition: 'bottom right'
			}
		};
	}

	componentDidMount() {
		const aboutContainer = document.getElementById('aboutContainer');
		aboutContainer.addEventListener('mousewheel', e => this.center(e), false);
		aboutContainer.addEventListener('DOMMouseScroll', e => this.center(e), false); // Firefox
		window.addEventListener('scroll', this.runOnScroll);
	}

	componentWillUnmount() {
		const aboutContainer = document.getElementById('aboutContainer');
		aboutContainer.removeEventListener('mousewheel', e => this.center(e), false);
		aboutContainer.removeEventListener('DOMMouseScroll', e => this.center(e), false); // Firefox
		window.removeEventListener('scroll', this.runOnScroll);
	}

	runOnScroll = () => {
		if (this.state.scrollY < 65 && window.pageYOffset > 0) {
			this.setState({ scrollY: 65 });
		} else if (this.state.scrollY > -25 && window.pageYOffset === 0) {
			this.setState({ scrollY: 0 });
		}
	};

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

		for (let i = 0; i < level && i < 9; i++) {
			arrow.push(<div key={i} className="vl" />);
		}

		if (!arrow.length) return <div className="vl" style={{ opacity: 0 }} />;
		return arrow;
	};

	changeBackground = activity => {
		if (!!!activity) this.setState({ style: {} });
		else
			this.setState({
				style: this.styles[activity]
			});
	};

	render() {
		const { scrollY, style } = this.state;

		return (
			<div id="aboutContainer" style={style}>
				<div style={{ display: 'flex', flexDirection: 'row' }}>{this.renderScrollIndicators()}</div>
				{scrollY < 30 ? <SoftwareAbout /> : <Activities changeBackground={this.changeBackground} />}
			</div>
		);
	}
}
