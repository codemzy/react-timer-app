var React = require('react');

// components
var Clock = require('./Clock');
var Controls = require('./Controls');

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            timerStatus: 'paused'
        };
    }
    
    // listen for state change
    componentDidUpdate(prevProps, prevState) {
        if (this.state.timerStatus !== prevState.timerStatus) {
            if (this.state.timerStatus === 'started') {
                this._startTimer();
            } else if (this.state.timerStatus === 'stopped') {
                this.setState({count: 0, timerStatus: 'paused'});
                clearInterval(this.timer);
            } else if (this.state.timerStatus === 'paused') {
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
                this.setState({timerStatus: 'stopped'});
            }
        }, 1000);
    }
    
    _handleStatusChange(newStatus) {
        this.setState({
            timerStatus: newStatus
        });
    }
    
    render() {
        return (
            <div>
                <h1 className="text-center page-title">Timer</h1>
                <Clock totalSeconds={this.state.count} />
                <Controls countdownStatus={this.state.timerStatus} onStatusChange={this._handleStatusChange.bind(this)} />
            </div>
        ); 
    }
}

module.exports = Timer;