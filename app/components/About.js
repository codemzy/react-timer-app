var React = require('react');

var About = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">About</h1>
            <p>This is the React Boilerplate.</p>
            <p>Used to make simple fullstack React applications.</p>
              <div className="text-center">
                <p>Built by codemzy.</p>
                <a href="https://www.twitter.com/codemzy" target="_blank"><i className="fa fa-twitter"></i> Twitter</a>&nbsp;&nbsp;&nbsp;
                <a href="https://github.com/codemzy" target="_blank"><i className="fa fa-github"></i> GitHub</a>&nbsp;&nbsp;&nbsp;
                <a href="https://codemzy.github.io" target="_blank"><i className="fa fa-th"></i> Portfolio</a>
              </div>
        </div>
    ); 
};

module.exports = About;