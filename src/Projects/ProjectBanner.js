import React, { Component } from 'react';

export default class ProjectBanner extends Component {
	render() {
		const { changeProject } = this.props;
		return (
			<div className="projectBanner">
				<div className="projectBannerHeader">
					<span>
						<span style={{ fontSize: 32 }}>P</span>ROJECTS
					</span>
				</div>
				<div className="projectBannerTitles">
					<div className="projectTitle" onClick={() => changeProject('sdh')}>
						Supreme Duck Hunting
					</div>
					<div className="projectTitle" onClick={() => changeProject('mtuFishing')}>
						MTU Fishing Club
					</div>
					<div className="projectTitle" onClick={() => changeProject('isaac')}>
						ISAAC
					</div>
					<div className="projectTitle" onClick={() => changeProject('acl')}>
						ACL Risk Assessment
					</div>
					<div className="projectTitle" onClick={() => changeProject('blueThumb')}>
						Blue Thumb OK
					</div>
				</div>
			</div>
		);
	}
}
