var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var Countdown = require('../../components/Countdown.js');

describe('Countdown', () => {
    it('should exist', () => {
        expect(Countdown).toExist();
    });
    
    describe('_handleSetCountdown', () => {
        it('should set state to started and countdown', (done) => {
            var countdown = TestUtils.renderIntoDocument(<Countdown />);
            countdown._handleSetCountdown(10);
            expect(countdown.state.count).toBe(10);
            expect(countdown.state.countdownStatus).toBe('started');
            // check if state reduced by 1 after just over a second
            setTimeout(() => {
                expect(countdown.state.count).toBe(9);
                done();
            }, 1001);
        });
        it('should not go below zero to a negative number', (done) => {
            var countdown = TestUtils.renderIntoDocument(<Countdown />);
            countdown._handleSetCountdown(1);
            // check if state still at 0 after 3 seconds
            setTimeout(() => {
                expect(countdown.state.count).toBe(0);
                done();
            }, 3001);
        });
    });
});