var React = require('react');

// components
var Clock = require('./Clock');
var CountdownForm = require('./CountdownForm');
var Controls = require('./Controls');

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
            } else if (this.state.countdownStatus === 'stopped') {
                this.setState({count: 0});
            } else if (this.state.countdownStatus === 'paused') {
                clearInterval(this.timer);
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
    
    _handleStatusChange(newStatus) {
        this.setState({
            countdownStatus: newStatus
        });
    }
    
    render() {
        var renderControlArea = () => {
            if (this.state.countdownStatus !== 'stopped') {
                return <Controls countdownStatus={this.state.countdownStatus} onStatusChange={this._handleStatusChange.bind(this)} />;
            } else {
                return <CountdownForm onSetCountdown={this._handleSetCountdown.bind(this)} />;
            }
        };
        return (
            <div>
                <Clock totalSeconds={this.state.count} />
                {renderControlArea()}
            </div>
        ); 
    }
}

module.exports = Countdown;