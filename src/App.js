import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Sidebar from './Components/Sidebar'
import Content from './Components/Content'
import Signup from './Components/Signup'

class App extends Component {
	// Data
	state = {
		channel: ''
	}
	// Functions
	getMessages = (id) => {
		this.setState({
			channel: id
		})
	}
	// Render
	render() {
		return (
			<div id="wrap">
				<Sidebar getMessages={this.getMessages} />
				<Content channel={this.state.channel} />
			</div>
		)
	}
}

export default App
