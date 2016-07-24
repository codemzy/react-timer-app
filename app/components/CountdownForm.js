var React = require('react');

class CountdownForm extends React.Component {
    
    _onSubmit(e) {
        e.preventDefault();
        var strSeconds = this.refs.seconds.value;
        if (strSeconds.length > 0 && strSeconds.match(/^[0-9]*$/)) {
            this.refs.seconds.value = '';
            this.props.onSetCountdown(parseInt(strSeconds, 10));
        }
    }
    
    render() {
        return (
            <div>
                <form ref="form" onSubmit={this._onSubmit.bind(this)} className="countdown-form">
                    <input type="text" ref="seconds" placeholder="Enter time in seconds" />
                    <button className="button expanded">Start</button>
                </form>
            </div>
        ); 
    }
}

module.exports = CountdownForm;