import React, {Component} from 'react'
import './Content.css'
import Message from './Message'
import NewMessage from './NewMessage'
import axios from 'axios'

class Content extends Component {
	// Data
	state = {
		messages: []
	}
	// Functions

	componentWillMount() {
		axios.get('http://localhost:4000/api/messages').then((res) => {
			this.setState({
				messages: res.data
			})
		}).catch((err) => {
			console.log('err', err)
		})
	}

	componentWillReceiveProps(props) {
		axios.get(`http://localhost:4000/api/messages?channel=${props.channel}`).then((res) => {
			this.setState({
				messages: res.data
			})
		}).catch((err) => {
			console.log('err', err)
		})
	}

	createMessage = (e, text) => {
		e.preventDefault()
		let message = {
			id: 7,
			author: 'Nikola',
			date: 'today',
			body: text
		}
		let messages = this.state.messages
		messages.push(message)
		this.setState({messages})
	}

	// Render
	render() {
		return (
			<div id="content">
				<div id="messages">
					{
						this.state.messages.map((m) => {
							return <Message message={m} key={m._id} />
						})
					}
				</div>
				<NewMessage createMessage={this.createMessage} />
			</div>
		)
	}
}

export default Content
