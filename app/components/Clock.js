var React = require('react');

class Clock extends React.Component {
    
    _formatSeconds(totalSeconds) {
        var seconds = totalSeconds % 60;
        var minutes = Math.floor(totalSeconds / 60);
        if (seconds < 10) {
            seconds = '0' + seconds;
        }
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        return minutes + ':' + seconds;
    }
    
    render() {
        var {totalSeconds} = this.props;
        return (
            <div className="clock-wrap">
                <div className="clock">
                    <span className="clock-text">{this._formatSeconds(totalSeconds)}</span>
                </div>
            </div>
        ); 
    }
}

Clock.propTypes = {
    totalSeconds: React.PropTypes.number
};

Clock.defaultProps = {
    totalSeconds: 0
};

module.exports = Clock;