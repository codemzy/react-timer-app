var React = require('react');

// components
var GreeterMessage = require('./GreeterMessage.js');
var GreeterForm = require('./GreeterForm.js');

class MainComponent extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            message: this.props.message
        };
    }
    
    _handleNewData(object) {
        // set state with name if passed up from the form
        if (object.name) {
            this.setState({
              name: object.name
            });
        }
        // set state with message if passed up from the form
        if (object.message) {
            this.setState({
              message: object.message
            });
        } 
    }
    
    render() {
        var name = this.state.name;
        var message = this.state.message;
        return (
            <div>
                <GreeterMessage name={name} message={message} />
                <GreeterForm onNewData={this._handleNewData.bind(this)} />
            </div>
        );
    }
    
}

MainComponent.defaultProps = {
    name: "Codemzy",
    message: "This is a React BoilerPlate."
};

module.exports = MainComponent;