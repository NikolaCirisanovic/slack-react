import React, {Component} from 'react'


class NewMessage extends Component {
	// Data
	// Functions
	// Render
	render() {
		return (
				<div id="new-message">
					<form>
						<div className="input-group">
							<input type="text" className="form-control" />
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
