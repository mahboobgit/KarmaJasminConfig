/// <reference path="../typings/globals/jasmine/index.d.ts" />
import { greet } from '../src/greet';

describe('Greeting Module', function(){

    var greetings: greet;
    
    // beforeAll(() => {
       
    // );

    it('Should greet when a name is passed', function(){
        greetings = new greet("mahboob");
        expect(greetings.GreetUser()).toMatch("Hello mahboob");
    });

    it('Should gracefully handle error when a name is not passed', function(){
        greetings = new greet();
        expect(greetings.GreetUser()).toMatch("Hello mahboob");
    });


});