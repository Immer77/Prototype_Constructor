// Eksempler der bliver gennemgået
// Objekter
// Der findes ikke objekter, men det ligner meget objekter i praksis er det maps.



// En almindelig constructor funktion KERNEN

function Player(firstName, lastName, team, position){
    this.firstName = firstName;
    this.lastName = lastName;
    this.team = team;
    this.position = position;
    this.toString = function() {return `Spilleren ${this.firstName} ${this.lastName}`;}
}

let playerOne = new Player("Peter", "Immersen", "Dignitas", "Botlane");
let playerTwo = new Player("Johan", "Stener", "PadelClub", "Right");
let playerThree = new Player("Rasmus", "Ingerslev", "Disc-Golf", "Putter");


console.log(playerOne.toString());

class Person{
    constructor(name){
        this.name = name;
    }


    talk(){
        console.log(`Prut ${this.name}`);
    }
}
// er det samme som

class Student extends Person{
    constructor(name, grade){
        super(name);
        this.grade = grade;
    }
}


let mig = new Person("Peter");

let studerende = new Student("Anne", 12);
studerende.talk();
console.log(studerende.getPrototype());
studerende.talk = function(){console.log(`Navn: ${this.name} Karakter ${this.grade}`)};
studerende.talk();






function PersonOne(name){
    this.name = name;
}

PersonOne.prototype.talk = function() {console.log(`Prut ${this.name}`)};


