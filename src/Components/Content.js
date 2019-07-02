import React, {Component} from 'react'
import Message from './Message'
import NewMessage from './NewMessage'

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
				<NewMessage />
			</div>
		)
	}
}

export default Content
