import React, {Component} from 'react'
import './Content.css'

class Message extends Component {
	// Data
	state = {
		message: this.props.message
	}
	// Functions
	
	// Render
	render() {
		return (
			<div className="message">
				<span className="author">{this.state.message.author.name}</span>
				<span className="date">{this.state.message.date}</span>
				<div className="body">{this.state.message.body}</div>
			</div>
		)
	}
}

export default Message
