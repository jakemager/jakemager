import React, { Component } from 'react';

import './Intro.scss';

export default class Intro extends Component {
	constructor(props) {
		super(props);

		this.state = {
			position: 0,
			jakeMargin: -999,
			magerMargin: -999,
			magerHalfway: false,
			jakeHalfway: false,
			animationsComplete: false,
			comBottom: -15
		};

		this.animate = () => setInterval(() => this.center(1), 18);
	}

	componentDidMount() {
		setTimeout(this.animate, 750)
	}

	componentWillUnmount() {
		clearInterval(this.animate)
	}

	center = () => {
		const { setIntroCompleted } = this.props;
		const { position, magerHalfway } = this.state;
		
		if (magerHalfway) return;
		const jakeRect = document.getElementById('jake').getBoundingClientRect();
		const magerRect = document.getElementById('mager').getBoundingClientRect();
		const documentWidth = document.body.clientWidth;

		if (magerRect.width / 2 + magerRect.x < documentWidth / 2) {
			this.setState(
				{
					position: 50,
					magerMargin: magerRect.width / -2,
					jakeMargin: jakeRect.width / -2,
					magerHalfway: true
				},
				() =>
					setTimeout(() => {
						this.setState({ jakeHalfway: true });
						setTimeout(() => this.setState({ animationsComplete: true }), 1000);
						setTimeout(setIntroCompleted, 2400);
					}, 635)
			);
		} else {
			this.setState({
				position: position + 0.75,
				magerMargin: magerRect.width / -2,
				jakeMargin: jakeRect.width / -2
			});
		}
	};

	render() {
		const {
			position,
			jakeMargin,
			magerMargin,
			magerHalfway,
			jakeHalfway,
			animationsComplete,
			comBottom
		} = this.state;

		return (
			<div id="introContainer" onScroll={this.center}>
				{animationsComplete && <div className="navbarIntro" />}
				<div
					className={`introText ${jakeHalfway && 'jakeUp'}`}
					id="jake"
					style={{ left: `${position}%`, marginLeft: jakeMargin }}
				>
					JAKE
				</div>
				<div
					className={`introText ${magerHalfway && 'magerUp'}`}
					id="mager"
					style={{ right: `${position}%`, marginRight: magerMargin }}
				>
					MAGER
				</div>
				<div className={`com ${magerHalfway && 'comUp'}`}>.com</div>
			</div>
		);
	}
}
