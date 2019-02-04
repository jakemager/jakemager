import React, { Component } from 'react';

import './Contact.scss';

export default class Contact extends Component {
	render() {
		return (
			<div className="contactContainer">
				<div className="contactHeaderContainer">
					<div className="contactHeader">CONTACT ME</div>
					<div className="contactSubheader">Buy me coffee :)</div>
				</div>
				<div className="contactLinks">
					<div>
						<i className="fa fa-envelope" /> Email: jmager@mtu.edu
					</div>
					<div>
						<i className="fa fa-phone" /> Phone: 586.850.0005
					</div>
					<div>
						<i className="fa fa-github" /> Github: jakemager
					</div>
					<div>
						<i className="fa fa-linkedin" /> Linkedin: jakemager
					</div>
				</div>
			</div>
		);
	}
}
