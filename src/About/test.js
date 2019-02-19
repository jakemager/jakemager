class Container extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			image: 'someImage.jpg'
		};
	}

	changeImage = () => {
		if (this.state.image === 'someImage.jpg') {
			this.setState({ image: 'differntImage.jpg' });
		} else {
			this.setState({ image: 'someImg.jpg' });
		}
	};

	render() {
		return (
			<div>
				<Header changeImage={this.changeImage} />
				<div className="body" />
			</div>
		);
	}
}

class Header extends React.Component {
	render() {
		return (
			<div className="header">
				<img src={this.props.image} />
			</div>
		);
	}
}
