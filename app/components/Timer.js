var React = require('react');

// components
var Clock = require('./Clock');
var Controls = require('./Controls');

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            countdownStatus: 'paused'
        };
    }
    
    // listen for state change
    componentDidUpdate(prevProps, prevState) {
        if (this.state.countdownStatus !== prevState.countdownStatus) {
            if (this.state.countdownStatus === 'started') {
                this._startTimer();
            } else if (this.state.countdownStatus === 'stopped') {
                this.setState({count: 0, countdownStatus: 'paused'});
                clearInterval(this.timer);
            } else if (this.state.countdownStatus === 'paused') {
                clearInterval(this.timer);
            }
        }
    }
    
    // clear the interval if changing pages
    componentWillUnmount() {
        clearInterval(this.timer);
    }
    
    _startTimer() {
        this.timer = setInterval(() => {
            var newCount = this.state.count + 1;
            this.setState({
                count: newCount 
            });
            if (newCount === 3600) {
                this.setState({countdownStatus: 'stopped'});
            }
        }, 1000);
    }
    
    _handleStatusChange(newStatus) {
        this.setState({
            countdownStatus: newStatus
        });
    }
    
    render() {
        return (
            <div>
                <h1 className="text-center page-title">Timer</h1>
                <Clock totalSeconds={this.state.count} />
                <Controls countdownStatus={this.state.countdownStatus} onStatusChange={this._handleStatusChange.bind(this)} />
            </div>
        ); 
    }
}

module.exports = Timer;