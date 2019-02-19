import React, { Component } from 'react';

import './Navbar.scss';

export default class Navbar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			logoSize: 100
		};
	}

	componentDidMount() {
		window.addEventListener('scroll', this.runOnScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.runOnScroll);
	}

	runOnScroll = () => {
		if (this.state.logoSize === 100 && window.pageYOffset > 0) {
			this.setState({ logoSize: 50 });
		} else if (this.state.logoSize === 50 && window.pageYOffset === 0) {
			this.setState({ logoSize: 100 });
		}
	};

	render() {
		return (
			<div className="navbar">
				<div className="navbarInner">
					<div style={{ display: 'flex', flexDirection: 'row' }}>
						<img
							src="/logo.png"
							alt="Jake Mager Logo"
							className="logo"
							style={{ height: this.state.logoSize }}
						/>
						<p className="logoText">
							<span style={{ fontSize: 20 }}>J</span>AKE<span style={{ fontSize: 20 }}>M</span>AGER
							<span style={{ fontSize: 10 }}>
								.com --- still under construction, last updated 02/03/2018
							</span>
						</p>
					</div>
					<div className="navLinks">
						<div className="navLink">ABOUT</div>
						<div className="navLink">PROJECTS</div>
						<div className="navLink">CONTACT</div>
						<a
							target="_blank"
							rel="noopener noreferrer"
							className="navLink"
							href="https://github.com/jakemager"
						>
							<i className="fa fa-github" style={{ fontSize: 20 }} />
						</a>
						<a
							target="_blank"
							rel="noopener noreferrer"
							className="navLink"
							href="https://linkedin.com/in/jakemager"
						>
							<i className="fa fa-linkedin" style={{ fontSize: 20 }} />
						</a>
					</div>
				</div>
			</div>
		);
	}
}
