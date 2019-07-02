import React, {Component} from 'react'

class Channel extends Component {
	// Data
	state = {
		channel: this.props.channel
	}
	// Functions
	componentDidMount() {
		console.log(this.props);
		
	}
	// Render
	render() {
		return (
			<li># {this.state.channel.name}</li>
		)
	}
}

export default Channel
