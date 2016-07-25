var React = require('react');
var {Link} = require('react-router');

var MainComponent = () => {
    
    return (
        <div>
            <h1 className="text-center page-title">Welcome to Turtle Time!</h1>
            <p>This is a simple web app built with Node, Express and ReactJS. It can be used as timer and as a countdown.</p>
            <Link to='/timer'>
              <button type='button' className='button hollow expanded'>Timer</button>
            </Link>
            <Link to='/countdown'>
              <button type='button' className='button hollow expanded'>Countdown</button>
            </Link>
            <p>The turtle keeps time with the rhythm of his flippers tapping against his shell as he swims through time collecting seconds.</p>
            <blockquote>
              Take a walk with a turtle. And behold the world in pause.
              <cite>Bruce Feiler</cite>
            </blockquote>
        </div>
    );

};

module.exports = MainComponent;