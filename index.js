//1. Zdk
class Person{
    constructor(firstName, lastName, height){
        this.firstName=firstName;
        this.lastName=lastName;
        this.height=height;
    }
}

const people=[];
let loop=true;
while(loop){
    const firstName=prompt("Ime:");
    const lastName=prompt("Prezime:");
    const height=Number(prompt("Visina:"));

    people.push(new Person(firstName, lastName, height));
    const answer=prompt(`Želite li završiti unos (DA/NE)?`);
    answer===`DA` ? loop=false: false;
}
let avg=0;
for(const person of people){
    avg+=person.height;
}
avg=avg/people.length;
let heightDifference=0;
let personDifference;
for(const person of people){
    if(Math.abs(person.height-avg)>heightDifference){
        heightDifference=Math.abs(person.height-avg);
        personDifference=person;
    }
}
console.log(personDifference);