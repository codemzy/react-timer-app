var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var Clock = require('../../components/Clock.js');

describe('Clock', () => {
    it('should exist', () => {
        expect(Clock).toExist();
    });
    
    describe('_formatSeconds', () => {
        it('should format seconds', () => {
            var clock = TestUtils.renderIntoDocument(<Clock />);
            var seconds = 615;
            var expected = '10:15';
            var actual = clock._formatSeconds(seconds);
            expect(actual).toBe(expected);
        });
        it('should format seconds when min/sec are less than 10', () => {
            var clock = TestUtils.renderIntoDocument(<Clock />);
            var seconds = 61;
            var expected = '01:01';
            var actual = clock._formatSeconds(seconds);
            expect(actual).toBe(expected);
        });
    });
});