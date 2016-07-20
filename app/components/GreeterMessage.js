var React = require('react');

class GreeterMessage extends React.Component {
    
    render() {
        return (
            <div>
                <h1>Hello {this.props.name}!</h1>
                <p>{this.props.message}</p>
            </div>
        );
    }
    
}

module.exports = GreeterMessage;