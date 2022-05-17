tugas_class.js
class Tiger {
    isDangerous = True;
    energy = 100;
    constructor(name,height,weight) {
        this.name = name;
        this.height = height;
        this.weight = weight;
    }
    die() {
       this.isDangerous = false;
    }
    angry() {
        this.energy = Roarr;
    }

    rest(hour) {
        this.energy = (1 * hour) + this.energy;
    }
    
}
class Cat extends Tiger {
    isDangerous = false;
    energy = 10;
    constructor(name,height,weight) {
        super(name,height,weight);
    }
    angry() {
        this.energy = meow;
    }
    die() {
    this.isDangerous = false;
    }

}
 
const irithel = new Tiger('irithel' , '2' , '200');
const nana = new Cat('nana' , '1' , '10');


console.log(bambang.energy);

console.log(herman.angry());

herman.rest(2)
