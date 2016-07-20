// Router set up
var React = require('react');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// Components
var Main = require('../components/Main');
var Home = require('../components/MainComponent');
var Timer = require('../components/Timer');
var Countdown = require('../components/Countdown');

// Routes
var routes = (
    <Router history={hashHistory}> 
        <Route path="/" component={Main}>
            <IndexRoute component={Home} />
            <Route path='/timer' header='About' component={Timer} />
            <Route path='/countdown' header='About' component={Countdown} />
        </Route>
    </Router>
);

module.exports = routes;