import React, { Component } from 'react';

export default class SoftwareAbout extends Component {
	render() {
		return (
			<div>
				<div className="aboutSection">
					<div className="aboutHeader">
						<span style={{ fontSize: '10vh' }}>S</span>OFTWARE{' '}
						<span style={{ fontSize: '10vh' }}>E</span>NGINEER
					</div>
					<div className="aboutDescription">
						Graduated from Michigan Technoligical University in 2018 with a Software Engineering BS
						degree. Started off my journey in highschool taking a PHP class and have been going
						strong ever since. I have a deep passion for...
					</div>
					<div className="aboutImages">
						<img src="/programLogos/reactLogo.png" alt="react" />
						<img src="/programLogos/nodeLogo.png" alt="node" />
						<img src="/programLogos/cNetLogo.png" alt="cSharp" />
						<img src="/programLogos/javaLogo.png" alt="java" />
						<img src="/programLogos/pythonLogo.png" alt="python" />
						<img src="/programLogos/phpIcon.png" alt="php" />
						<img src="/programLogos/mongoLogo.png" alt="mongo" />
						<img src="/programLogos/sqlLogo.png" alt="sql" />
					</div>
				</div>
				<div className="aboutSection" style={{ paddingTop: 25 }}>
					<div className="aboutHeader">
						<span style={{ fontSize: '10vh' }}>UI/UX</span>{' '}
						<span style={{ fontSize: '10vh' }}>D</span>ESIGNER
					</div>
					<div className="aboutDescription">
						Graduated from Michigan Technoligical University in 2018 with a Software Engineering BS
						degree. Started off my journey in highschool taking a PHP class and have been going
						strong ever since. I have a deep passion for...
					</div>
				</div>
			</div>
		);
	}
}
