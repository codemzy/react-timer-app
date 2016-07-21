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
        return (
            <div>
                <h1 className="text-center page-title">This is the Clock.</h1>
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