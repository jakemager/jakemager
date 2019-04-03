import React, { Component } from 'react';

export default class Activities extends Component {
	render() {
		const { changeBackground } = this.props;

		return (
			<div className="fadeIn">
				<div className="aboutSection">
					<div className="aboutHeader">
						<p onMouseEnter={() => changeBackground('duck')} onMouseLeave={changeBackground}>
							<span style={{ fontSize: '10vh' }}>H</span>UNTER
						</p>
					</div>
					<div className="aboutHeader">
						<p onMouseEnter={() => changeBackground('explorer')} onMouseLeave={changeBackground}>
							<span style={{ fontSize: '10vh' }}>E</span>XPLORER
						</p>
					</div>
					<div className="aboutHeader">
						<p onMouseEnter={() => changeBackground('fish')} onMouseLeave={changeBackground}>
							<span style={{ fontSize: '10vh' }}>F</span>ISHERMEN
						</p>
					</div>
					<div className="aboutHeader">
						<p onMouseEnter={() => changeBackground('snowboard')} onMouseLeave={changeBackground}>
							<span style={{ fontSize: '10vh' }}>S</span>NOWBOARDER
						</p>
					</div>
					<div className="aboutHeader">
						<p onMouseEnter={() => changeBackground('fitness')} onMouseLeave={changeBackground}>
							<span style={{ fontSize: '10vh' }}>F</span>ITNESS{' '}
							<span style={{ fontSize: '10vh' }}>E</span>NTHUSIAST
						</p>
					</div>
				</div>
			</div>
		);
	}
}
