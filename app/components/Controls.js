var React = require('react');

class Controls extends React.Component {
    
    _onStatusChange(newStatus) {
        return () => {
            this.props.onStatusChange(newStatus);
        };
    }
    
    render() {
        var {countdownStatus} = this.props;
        var renderStartStopButton = () => {
            if (countdownStatus === 'started') {
                return <button className="button secondary" onClick={this._onStatusChange('paused')} >Pause</button>;
            } else if (countdownStatus === 'paused') {
                return <button className="button primary" onClick={this._onStatusChange('started')}>Start</button>;
            }
        };
        return (
            <div className="controls">
                {renderStartStopButton()}
                <button className="button alert hollow expanded" onClick={this._onStatusChange('stopped')}>Clear</button>
            </div>
        ); 
    }
}

Controls.propTypes = {
    countdownStatus: React.PropTypes.string.isRequired,
    onStatusChange: React.PropTypes.func.isRequired
};

module.exports = Controls;