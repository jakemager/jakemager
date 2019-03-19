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
						Graduated from Michigan Technological University in 2018 with a Software Engineering BS degree.
						My journey started off in highschool taking a PHP class and have been going strong ever since. 
						I have a deep passion for developing something for nothing, which has brought me to the world of web development.
						In college I successfully led two teams for Senior Design and a Human Computer Interaction course 
						creating web applications under the advisement of Robert Pastel. I then single handedly revolutionized the
						way the Fishing Club at MTU rents their equipment and keeps track of their members by creating <a style={{color: '#fff'}} href='http://mtufishing.com/'>mtufishing.com</a>.
						For my waterfowl hunting obsession, I created an app for both IOS/Android called 
						Supreme Duck Hunting that allows users to track their harvest. In my spare time, I helped launch 
						a startup with their beta web application. Currently I am working at Smart Monkeys Inc developing a 
						revolutionary web application that combines both audio video and information technology.
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
						Before taking on software engineering I was really into graphic design. I took many years of graphic design courses
                        in highschool and two years in college. My focus was on advertising and design. One of my biggest accomplishments was
                        placing second in the state for Skills USA in advertising. Once I entered the industry though, I realized I liked to
                        produce software much more so I switched my major. These skills however bled into my software world, one of my biggest
                        pleasures is designing something and watching a user seamlessly use it without any problems.
					</div>
				</div>
			</div>
		);
	}
}
