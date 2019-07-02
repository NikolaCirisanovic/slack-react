import React, {Component} from 'react'
import Message from './Message'

class Content extends Component {
	// Data
	state = {
		messages: [
			{
				id: 1,
				author: 'Tony Russo',
				date: '2 Jul 2019 - 9:09AM',
				body: 'Hello World'
			}, {
				id: 2,
				author: 'Nikola Cirisanovic',
				date: '2 Jul 2019 - 9:12AM',
				body: 'Wooooooooooooosaaaaa'
			}
		]
	}
	// Functions
	// Render
	render() {
		return (
			<div id="content">
				<div id="messages">
					{
						this.state.messages.map((m) => {
							return <Message message={m} key={m.id} />
						})
					}
				</div>
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
			</div>
		)
	}
}

export default Content
