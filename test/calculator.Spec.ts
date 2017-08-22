/// <reference path="../typings/globals/jasmine/index.d.ts" />
import { calculator } from '../src/calculator';
 
describe('Calculator: Add', () => {
    let calc = new calculator();
    
    // beforAll(() =>{
    //     calc = new calculator();
    // });
    

    it('Should add 2 numbers', () => {
        let result = calc.add(2, 3);
        expect(result).toBe(5);
    });
    
    it('Should add more than numbers. 2+3+5=10', () => {
        let result = calc.add(2, 3, 5);
        expect(result).toBe(10);
    });


    describe('should handle exception cases', ()=> {
      
        it('Should handle if string is passed. 2+3+"str"=5', () => {
            let result = calc.add(2, 3, 1, "some random string");
            expect(result).toBe(6);
        });
    });

    

});


describe('SUM', () => {
    let calc = new calculator();

    it('Should add 2 numbers', () => {
        let result = calc.add(2, 3);
        expect(result).toBe(5);
    });

});


