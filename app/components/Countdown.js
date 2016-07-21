var React = require('react');

var Clock = require('./Clock');
var CountdownForm = require('./CountdownForm');

class Countdown extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            countdownStatus: 'stopped'
        };
    }
    
    // listen for state change
    componentDidUpdate(prevProps, prevState) {
        if (this.state.countdownStatus !== prevState.countdownStatus) {
            if (this.state.countdownStatus === 'started') {
                this._startTimer();
            }
        }
    }
    
    _handleSetCountdown(seconds) {
        this.setState({
            count: seconds,
            countdownStatus: 'started'
        });
    }
    
    _startTimer() {
        this.timer = setInterval(() => {
            var newCount = this.state.count - 1;
            this.setState({
                count: newCount >= 0 ? newCount : 0 
            });
        }, 1000);
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