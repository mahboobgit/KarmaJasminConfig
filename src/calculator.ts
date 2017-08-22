export class calculator {

    public add(...any: number[]): number {
        let total: number=0;

        if (arguments.length > 0) {

            for (let i = 0; i < arguments.length; i++) {

                let num: number = 0;
                num = parseInt(arguments[i]);
                if(!isNaN(num) && num != undefined)                    
                    total += num;
            }
        }
        return total;
    }
}