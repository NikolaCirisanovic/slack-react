import React, {Component} from 'react';
import './Content.css'

class Message extends Component {
    // Data
    state = {
        message: this.props.message
    }
    // Function
    // Render
    render() {
        return (
            <div className="message">
                    <span className="author">{this.state.message.author}</span>
                    <span className="timestamp">{this.state.message.date}</span>
                    <div className="text">{this.state.message.body}</div>
                </div>
               
        )
    }
}

export default Message;