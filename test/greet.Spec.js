"use strict";
/// <reference path="../typings/globals/jasmine/index.d.ts" />
var greet_1 = require("../src/greet");
describe('Greeting Module', function () {
    var greetings;
    // beforeAll(() => {
    // );
    it('Should greet when a name is passed', function () {
        greetings = new greet_1.greet("mahboob");
        expect(greetings.GreetUser()).toMatch("Hello mahboob");
    });
    it('Should gracefully handle error when a name is not passed', function () {
        greetings = new greet_1.greet();
        expect(greetings.GreetUser()).toMatch("Hello mahboob");
    });
});
//# sourceMappingURL=greet.Spec.js.map