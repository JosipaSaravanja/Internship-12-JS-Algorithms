class ColorfulFruit{
    constructor(name, colors, isForSale){
        this.name=name;
        this.colors=colors;
        this.isForSale=isForSale;
    }
}

const fruitsOriginal = [
    new ColorfulFruit('banana', ['yellow'], false),
    new ColorfulFruit('apple', ['green', 'yellow'], false),
    new ColorfulFruit('orange', ['orange'], false),
    new ColorfulFruit('kiwi', ['brown', 'green'], false),
    new ColorfulFruit('watermelon', ['green', 'red'], false),
    new ColorfulFruit('strawberry', ['green', 'red'], false),
    new ColorfulFruit('lime', ['green', 'yellow'], false),
    new ColorfulFruit('apricot', ['red', 'yellow'], false),
    new ColorfulFruit('cantaloupe', ['orange', 'green'], false),
];


class Fruit{
    constructor(name, color, isForSale){
        this.name=name;
        this.color=color;
        this.isForSale=isForSale;
    }
}
const fruits = [
    new Fruit('banana', 'yellow', false),
    new Fruit('apple', 'green', false),
    new Fruit('orange', 'orange', false),
    new Fruit('kiwi', 'brown', false),
    new Fruit('watermelon', 'red', false),
    new Fruit('strawberry', 'red', true),
    new Fruit('lime', 'lime', true),
    new Fruit('apricot', 'red', true),
    new Fruit('cantaloupe', 'green', true),
];

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

    const num=Number(prompt(`Broj osoba koje želite uniti:`));
    const people=[]
    for(i=0; i<num; i++){
        const firstName=prompt("Ime:");
        const lastName=prompt("Prezime:");
        const eyeColor=prompt("Boja očiju:");
        const hairColor=prompt("Boja kose:");
        const height=Number(prompt("Visina:"));

        people.push(new Person(firstName, lastName, eyeColor, hairColor, height));
    }

    people.sort((x, y) => x.height >= y.height? 1: -1)

    const overMedian = people.slice(people.length/2, people.length);
    overMedian.forEach(person=>person.eyeColor===person.hairColor? console.log(person):false);
}

function zdk3(){
    const filteredFruits = fruits.filter(fruit=> {
        return fruit.name === fruit.color
    });

    filteredFruits.forEach(fruit=> console.log(fruit));
}

function zdk4(){
    console.log(`Originalni niz:`)
    fruitsOriginal.forEach(el=>console.log(el));

    let fruitChanged=JSON.parse(JSON.stringify(fruitsOriginal));

    fruitChanged = fruitChanged.map(fruit => {
        if (fruit.colors.indexOf("yellow")!==-1)
            fruit.colors[fruit.colors.indexOf("yellow")] = "red"
        return fruit
    })

    console.log(`Promijenjeni niz:`)
    fruitChanged.forEach(el=>console.log(el));
}

function zdk5(){
    //filtrirani ORIGINALNI (bez yellow->red) niza
    const fruits5 = fruitsOriginal.filter(fruit=>fruit.colors.includes("yellow"));
    
    fruits5.forEach(el=>console.log(el));
}

function zdk6(){
    console.log(`Trenutna košarica:`)
    fruits.forEach(el=>console.log(el));

    console.log(`Nedostupno (indexi):`);
    fruits.forEach(el=> {
        !el.isForSale?console.log(fruits.indexOf(el)):false;
    })

    const availableBasket=fruits.filter(fruit=>{return fruit.isForSale===true});
    console.log(`Preporucena kupnnja:`);
    availableBasket.forEach(el=>console.log(el));
}