var React = require('react');

class GreeterForm extends React.Component {
    
    _onFormSubmit(e) {
        e.preventDefault();
        var name = this.refs.name.value;
        var message = this.refs.message.value;
        var update = {};
        if (name.length > 0) {
            this.refs.name.value = '';
            update.name = name;
        }
        if (message.length > 0) {
            this.refs.message.value = '';
            update.message = message;
        }
        // pass the update object to the Greetr function
        this.props.onNewData(update);
        
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this._onFormSubmit.bind(this)}>
                    <div><input type="text" placeholder="Your name" ref="name" /></div>
                    <div><textarea placeholder="Your message..." ref="message"></textarea></div>
                    <div><button className="hollow expanded button">Update</button></div>
                </form>
            </div>
        );
    }
    
}

module.exports = GreeterForm;