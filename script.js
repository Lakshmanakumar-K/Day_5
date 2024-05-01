// class and objects
// 1.https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md
//Class -Movie
// The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:

// title, which is a String representing the title of the movie
// studio, which is a String representing the studio that made the movie
// rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)
// a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

// b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

// c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.

// d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”

class Movie {
    
    constructor(title,studio,rating = "PG"){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }


static getPG(arr){
    let pg_rating_arr = arr.filter((movie) => movie.rating == "PG");
    return pg_rating_arr;
}

}

let m1 = new Movie("KGF","ABC");
let m2 = new Movie("Good knight","AVM","R");
let m3 = new Movie("Manjummel boys","DEF","PG");
let m4 = new Movie("Leo","AVM");
let m5 = new Movie("Sita Ramam","ADF","PG13");

console.log(Movie.getPG([m1,m2,m3,m4,m5]));

let m6 = new Movie("Casino Royale","Eon Productions","PG13");

for (let key in m6){
    console.log(m6[key]);
}

// 2.https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md
// class - Circle

class Circle {
    
    //constructor overloading is not possible in javascript
    constructor(radius,color){
        this.radius = radius;
        this.color = color;
    }
    
    //static methods
    static circle_noparam(){
        return new Circle(0," ");
    }
    
    static circle_radparam(radius){
        return new Circle(radius," ");
    }
    
    getRadius(){
        return this.radius;
    }
    
    setRadius(radius){
        this.radius = radius;
    }
    
    getColor(){
        return this.color;
    }
    
    setColor(color){
        this.color = color;
    }
    
    getArea(){
        return Math.PI * this.radius * this.radius;
    }
    
    getCircumference(){
        return (2 * Math.PI * this.radius);
    }
    
    toString(){
        return `Circle [radius = ${this.radius} , color = ${this.color} ]` ; 
    }
}

console.log(Circle.circle_noparam());
console.log(Circle.circle_radparam(20));
let c1 = new Circle(30.02,"red");
let c2 = new Circle(45.6);
let c3 = new Circle();
console.log(c1);
console.log(c2);
console.log(c3);
c2.setColor("blue");
c3.setRadius(15.65);
c3.setColor("green");
console.log(c1.getRadius() + " , " + c1.getColor());
console.log(c2.getRadius() + " , " + c2.getColor());
console.log(c3.getRadius() + " , " + c3.getColor());

console.log(c1.getArea());
console.log(c3.getCircumference());

console.log(c1.toString());
console.log(c2.toString());
console.log(c3.toString());

// 3.Write a “person” class to hold all the details
class Person {
    
    constructor(name,age,birthdate,gender,height,address,country,education,maritalstatus){
        this.name =name,
        this.age = age;
        this.birthdate = birthdate;
        this.gender = gender;
        this.height = height;
        this.address = address;
        this.country = country;
        this.education = education;
        this.maritalstatus = maritalstatus;
    }
}

let p1 = new Person("Lakshmanakumar K",25,"25.06.1998","Male",165,"Guduvancheri","India","B.E.","Single")
for (let key in p1){
    console.log(`${key} : ${p1[key]}`);
}
//console.log(p1);

// 4.write a class to calculate the Uber price
class Uber {
    
    constructor(passenger,distance,modeoftransport){
        this.passenger = passenger;
        this.distance = distance;
        this.modeoftransport = modeoftransport;
    }
    
    getPrice(){
        if (this.passenger == 1 && this.modeoftransport == "bike"){
            return this.distance * 10;
        }
        else if (this.passenger < 4 && this.modeoftransport == "auto"){
            return this.distance * 20;
        }
        else if (this.modeoftransport == "car"){
            return this.distance * 40;
        }
        else{
            return `please choose correct modeoftransport`;
        }
    }
}

let u1 = new Uber(1,5,"bike");
let u2 = new Uber(3,15,"auto");
let u3 = new Uber(5,30,"car");
let u4 = new Uber(4,20,"auto");
console.log(u1.getPrice());
console.log(u2.getPrice());
console.log(u3.getPrice());
console.log(u4.getPrice());
