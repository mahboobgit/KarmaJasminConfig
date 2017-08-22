"use strict";
var Greet = (function () {
    function Greet() {
        this.GreetMessage = "Hello";
    }
    return Greet;
}());
var greet = (function () {
    function greet(name) {
        //super();
        this.greetClass = new Greet();
        if (name == undefined)
            this.greetClass.Name = "mahboob";
        else
            this.greetClass.Name = name;
    }
    greet.prototype.GreetUser = function () {
        return this.greetClass.GreetMessage + " " + this.greetClass.Name;
    };
    return greet;
}());
exports.greet = greet;
//# sourceMappingURL=greet.js.map