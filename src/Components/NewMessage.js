import React, {Component} from 'react'


class NewMessage extends Component {
	// Data
	state = {
		text: ''
	}
	// Functions
	changeText = (e) => {
		this.setState({
			text: e.target.value
		})
	}

	createMessage = (e) => {
		e.preventDefault()
		console.log('Hello!')
	}

	// Render
	render() {
		return (
			
				<div id="new-message">
					<form onSubmit={(e) => this.props.createMessage(e)}>
						<div className="input-group">
							<input type="text" className="form-control" placeholder="Write..." value={this.state.text}
							onChange={(e) => this.changeText(e)} />
							<div className="input-group-append">
								<button type="submit" className="btn btn-success">Send</button>
							</div>
						</div>
					</form>
				</div>
		)
	}
}

export default NewMessage
