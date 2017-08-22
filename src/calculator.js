"use strict";
var calculator = (function () {
    function calculator() {
    }
    calculator.prototype.add = function () {
        var any = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            any[_i] = arguments[_i];
        }
        var total = 0;
        if (arguments.length > 0) {
            for (var i = 0; i < arguments.length; i++) {
                var num = 0;
                num = parseInt(arguments[i]);
                if (!isNaN(num) && num != undefined)
                    total += num;
            }
        }
        return total;
    };
    return calculator;
}());
exports.calculator = calculator;
//# sourceMappingURL=calculator.js.map