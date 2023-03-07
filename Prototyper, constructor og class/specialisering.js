// specialisering.js
class Person {
    constructor(navn) {
        this.navn = navn;
    }

    equals(p) {
        if(p.constructor === this.constructor && p.navn === this.navn){
            return true;
        }else{
            return false;
        }
    }

    static compare(p1,p2){
        if(p1.navn > p2.navn){
            return 1;
        }else if(p1.navn < p2.navn){
            return -1;
        }else{
            return 0;
        }
    }



    toString() { return this.navn; }
}
class Studerende extends Person {
    constructor(navn, id) {
        super(navn);
        this.id = id;
    }

    equals(p) {
        if((p.constructor === this.constructor && p.navn === this.navn) && p.id === this.id){
            return true;
        }else{
            return false;
        }
    }
    
    toString() { return super.toString() + ": " + this.id; };


}

class Kat {
    constructor(navn) { this.navn = navn; }
    toString() { return 'Kat: ' + this.navn; };
}

let kat = new Kat('Garfield');
let person = new Person("Vigo");
let person2 = new Person("Peter");
console.log(person.equals(person2)); // => True
let studerende = new Studerende("Ida", 123);
let studerende1 = new Studerende("Anne", 223);
console.log(studerende.equals(studerende1));


// Array af personer/studerende

let peoples = [person, person2, studerende, studerende1, kat];
console.log(peoples);
peoples.sort();
console.log(peoples);

// Compare static metode på person
console.log(Person.compare(person.navn, person2.navn));


// Polymorfi
console.log(person instanceof Person); // => true
console.log(person instanceof Studerende); // => false
console.log(studerende instanceof Person); // => true
console.log(studerende instanceof Studerende); // => true

