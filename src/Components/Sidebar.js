import React, {Component} from 'react'
import './Sidebar.css'
import Channel from './Channel'

class Sidebar extends Component {
	// Data
	state = {
		workspace: 'Tortuga Coders',
		channels: [
			{
				id: 1,
				name: 'general'
			}, {
				id: 2,
				name: 'programming'
			}, {
				id: 3,
				name: 'random'
			}
		]
	}
    // Functions
    selectChannel = (id) => {
		console.log(id)
		let channels = this.state.channels
		channels.forEach((c) => delete c.active)
		let channel = channels.find((c) => c.id === id)
		channel.active = true
		this.setState({channels})
		console.log(this.state.channels)
    }
    
	// Render
	render() {
		return (
			<div id="sidebar">
				<h2>{this.state.workspace}</h2>
				<h3>Channels</h3>
				<ul className="list-unstyled">
					{
						this.state.channels.map((c) => {
                            return <Channel channel={c} key={c.id} 
                            selectChannel={this.selectChannel} />
						})
					}
				</ul>
			</div>
		)
	}
}

export default Sidebar
