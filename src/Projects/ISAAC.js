import React, { Component } from 'react';

export default class sdh extends Component {
	render() {
		return (
			<div className="projectContainer" style={{ background: '#fff', height: '100vh' }}>
				<div className="projectHeader">
					<span style={{ fontSize: '10vh' }}>I</span>SAAC
				</div>
				<div className="projectDescription">
					Supreme Duck Hunting is an app to take waterfowl hunters to the next level of success.
					Built with react native, supreme duck hunting allows user to track all of their hunts in
					complete detail. This enables the user to use this data to know where to hunt when
					depending on weather condtions and their past hunts.
				</div>
			</div>
		);
	}
}
