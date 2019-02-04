import React, { Component } from 'react';
import ProjectBanner from './ProjectBanner';

import './Projects.scss';
import SDH from './SDH';
import ISAAC from './ISAAC';
import ACL from './ACL';
import MtuFishing from './MtuFishing';
import BlueThumb from './BlueThumb';

export default class Projects extends Component {
	constructor(props) {
		super(props);

		this.state = {
			currentProject: 'sdh'
		};
	}
	render() {
		const { currentProject } = this.state;
		return (
			<div>
				<ProjectBanner changeProject={e => this.setState({ currentProject: e })} />
				{currentProject === 'sdh' && <SDH />}
				{currentProject === 'isaac' && <ISAAC />}
				{currentProject === 'blueThumb' && <BlueThumb />}
				{currentProject === 'acl' && <ACL />}
				{currentProject === 'mtuFishing' && <MtuFishing />}
			</div>
		);
	}
}
