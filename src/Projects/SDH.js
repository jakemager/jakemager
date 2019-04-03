import React, { Component } from 'react';

export default class sdh extends Component {
	render() {
		return (
			<div className="projectContainer" style={{ background: '#fff', height: '100vh' }}>
				<div className="projectHeader">
					<span style={{ fontSize: '10vh' }}>S</span>UPREME{' '}
					<span style={{ fontSize: '10vh' }}>D</span>UCK <span style={{ fontSize: '10vh' }}>H</span>
					UNTING
				</div>
				<div className="projectDescription">
					Supreme Duck Hunting is an app to take waterfowl hunters to the next level of success.
					Built with react native, supreme duck hunting allows user to track all of their hunts in
					complete detail. This enables the user to use this data to know where to hunt when
					depending on weather condtions and their past hunts.
					<br />
					<a href="https://play.google.com/store/apps/details?id=com.supremeduckhuntingmobile">
						Play Store
					</a>
					<br />
					<a href="https://itunes.apple.com/in/app/supreme-duck-hunting/id1437281924?mt=8">
						Itunes Store
					</a>
				</div>
			</div>
		);
	}
}
