var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('../../components/Timer.js');

describe('Timer', () => {
    it('should exist', () => {
        expect(Timer).toExist();
    });

    it('should start timer on started status', (done) => {
        var timer = TestUtils.renderIntoDocument(<Timer />);
        timer._handleStatusChange('started');
        expect(timer.state.count).toBe(0);
        expect(timer.state.timerStatus).toBe('started');
        // check if state increased by 1 after just over a second
        setTimeout(() => {
            expect(timer.state.count).toBe(1);
            done();
        }, 1001);
    });
    
    
    it('should pause timer on paused status', (done) => {
        var timer = TestUtils.renderIntoDocument(<Timer />);
        timer.setState({count: 10});
        timer._handleStatusChange('started');
        timer._handleStatusChange('paused');
        // check if state increased by 1 after just over a second
        setTimeout(() => {
            expect(timer.state.count).toBe(10);
            expect(timer.state.timerStatus).toBe('paused');
            done();
        }, 1001);
    });
    
    it('should clear timer on stopped status', (done) => {
        var timer = TestUtils.renderIntoDocument(<Timer />);
        timer.setState({count: 10});
        timer._handleStatusChange('started');
        timer._handleStatusChange('stopped');
        // check if state increased by 1 after just over a second
        setTimeout(() => {
            expect(timer.state.count).toBe(0);
            expect(timer.state.timerStatus).toBe('stopped');
            done();
        }, 1001);
    });
    
});