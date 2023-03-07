class Person{
    constructor(name){
        this.name = name;
        this.groups = [];
    }

    addGroup(group){
        if(!groups.contains(group)){
            this.groups.push(group);
            group.addPerson(this);
        }
    }

    removeGroup(group){
        if(groups.contains(group)){
            let indexOf = groups.indexOf(group);
            this.groups.splice(indexOf, 1);
            group.removePerson(this);
        }
    }

    static getGroups() {return this.groups};

}


class Group{
    constructor(name, persons){
        this.name = name;
        this.persons = persons;
    }
    
    addPerson(person){
        if(!persons.contains(person)){
            this.persons.push(person);
            person.addGroup(this);
        }
    }
    
    removePerson(person){
        if(persons.contains(person)){
            let indexOf = persons.indexOf(person);
            this.persons.splice(indexOf, 1);
            person.removeGroup(this);
        }
    }

    static getPersons() {return this.persons};

}


let person = new Person("Peter");
let person = new Person("Anne");
let group = new Group("West Coast");

group.addPerson(person);