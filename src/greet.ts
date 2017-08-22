class Greet{
    public GreetMessage: string = "Hello";
    public Name: string;
}

export class greet{
    private greetClass: Greet;
    constructor(name: string) {
        //super();
        this.greetClass = new Greet();
        if(name == undefined)
            this.greetClass.Name = "mahboob";
        else    
            this.greetClass.Name = name;
    }

    public GreetUser() : string{
        return `${this.greetClass.GreetMessage} ${this.greetClass.Name}`;
    }
    
}