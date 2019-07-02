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
	// Render
	render() {
		return (
			<div id="sidebar">
				<h2>{this.state.workspace}</h2>
				<h3>Channels</h3>
				<ul className="list-unstyled">
					{
						this.state.channels.map((c) => {
							return <Channel channel={c} key={c.id} />
						})
					}
				</ul>
			</div>
		)
	}
}

export default Sidebar
