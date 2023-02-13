class Fruit{
    constructor(name, colors, isInBasket){
        this.name=name;
        this.colors=colors;
        this.isInBasket=isInBasket;
    }
}

const fruitsOriginal = [
    new Fruit('banana', ['yellow'], false),
    new Fruit('apple', ['green', 'yellow'], false),
    new Fruit('orange', ['orange'], false),
    new Fruit('kiwi', ['brown', 'green'], false),
    new Fruit('watermelon', ['green', 'red'], false),
    new Fruit('strawberry', ['green', 'red'], false),
    new Fruit('lime', ['green', 'yellow'], false),
    new Fruit('apricot', ['red', 'yellow'], false),
    new Fruit('cantaloupe', ['orange', 'green'], false),
];

//1. Zdk
function zdk1(){
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
}
//2. Zdk
function zdk2(){
    class Person{
        constructor(firstName, lastName, eyeColor, haircolor, height){
            this.firstName=firstName;
            this.lastName=lastName;
            this.eyeColor=eyeColor;
            this.hairColor=haircolor;
            this.height=height;
        }
    }

    const num=Number(prompt(`Broj osoba koje elite uniti:`));
    const people=[]
    for(i=0; i<num; i++){
        const firstName=prompt("Ime:");
        const lastName=prompt("Prezime:");
        const eyeColor=prompt("Boja očiju:");
        const hairColor=prompt("Boja kose:");
        const height=Number(prompt("Visina:"));

        people.push(new Person(firstName, lastName, eyeColor, hairColor, height));
    }

    people.sort((x, y) => {
        if (x.height >= y.height)
            return 1;
        else
            return -1;
    })

    const overMedian = people.slice(people.length/2, people.length);
    overMedian.forEach(person=> {
        person.eyeColor===person.hairColor? console.log(person):false;
    });
}

//3. Zdk
function zdk3(){
    class Fruit{
        constructor(name, color, isInBasket){
            this.name=name;
            this.color=color;
            this.isInBasket=isInBasket;
        }
    }
    const fruits = [
        new Fruit('banana', 'yellow', false),
        new Fruit('apple', 'green', false),
        new Fruit('orange', 'orange', false),
        new Fruit('kiwi', 'brown', false),
        new Fruit('watermelon', 'red', false),
        new Fruit('strawberry', 'red', false),
        new Fruit('lime', 'lime', false),
        new Fruit('apricot', 'red', false),
        new Fruit('cantaloupe', 'green', false),
    ];

    const filteredFruits = fruits.filter(fruit=> {
        return fruit.name === fruit.color
    });

    filteredFruits.forEach(fruit=> {
        console.log(fruit)
    });
}

//4. Zdk


function zdk4(){
    console.log(fruitsOriginal);
    let fruitChanged=JSON.parse(JSON.stringify(fruitsOriginal));
    fruitChanged = fruitChanged.map(fruit => {
        if (fruit.colors.indexOf("yellow")!==-1)
            fruit.colors[fruit.colors.indexOf("yellow")] = "red"
        return fruit
    })
    console.log(fruitChanged);
}
//5. Zdk
function zdk5(){
    //ispis filtriranog originalnog niza
    const fruit5 = fruitsOriginal.filter(fruit=>{
        return fruit.colors.includes("yellow")
    })
    console.log(fruit5);
}