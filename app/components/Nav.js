var React = require('react');
var {Link, IndexLink} = require('react-router');

class Nav extends React.Component {
    
    render() {
        return (
            <div className="top-bar">
              <div className="top-bar-left">
                    <ul className="menu">
                    <li className="menu-text">React Boilerplate</li>
                      <li>
                        <IndexLink to="/" activeClassName="active">Home</IndexLink>
                      </li>
                      <li>
                        <Link to="/about" activeClassName="active">About</Link>
                      </li>
                    </ul>
              </div>
              <div className="top-bar-right show-for-large">
                <ul className="menu">
                  <li>Codemzy</li>
                </ul>
              </div>
            </div>
        );
    }
}

module.exports = Nav;