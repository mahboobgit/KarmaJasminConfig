"use strict";
/// <reference path="../typings/globals/jasmine/index.d.ts" />
var calculator_1 = require("../src/calculator");
describe('Calculator: Add', function () {
    var calc = new calculator_1.calculator();
    // beforAll(() =>{
    //     calc = new calculator();
    // });
    it('Should add 2 numbers', function () {
        var result = calc.add(2, 3);
        expect(result).toBe(5);
    });
    it('Should add more than numbers. 2+3+5=10', function () {
        var result = calc.add(2, 3, 5);
        expect(result).toBe(10);
    });
    describe('should handle exception cases', function () {
        it('Should handle if string is passed. 2+3+"str"=5', function () {
            var result = calc.add(2, 3, 1, "some random string");
            expect(result).toBe(6);
        });
    });
});
describe('SUM', function () {
    var calc = new calculator_1.calculator();
    it('Should add 2 numbers', function () {
        var result = calc.add(2, 3);
        expect(result).toBe(5);
    });
});
//# sourceMappingURL=calculator.Spec.js.map