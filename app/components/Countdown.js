var React = require('react');

var Clock = require('./Clock');
var CountdownForm = require('./CountdownForm');

class Countdown extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    
    _handleSetCountdown(seconds) {
        this.setState({
            count: seconds
        });
    }
    
    render() {
        return (
            <div>
                <Clock totalSeconds={this.state.count} />
                <CountdownForm onSetCountdown={this._handleSetCountdown.bind(this)} />
            </div>
        ); 
    }
}

module.exports = Countdown;