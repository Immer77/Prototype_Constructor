class StringStack{
    constructor(){
        this.array = [];

    }

    push(o){
        this.array.push(o);
    }

    pop(){
        this.array.pop();
    }

}

let stack = new StringStack();

let person1 = "Peter";
console.log(typeof person1);
let person2 = "Anne";
let person3 = "Dennis";
stack.push(person1);
stack.push(person2);
stack.push(person3);
console.log(stack.pop());
console.log(stack);