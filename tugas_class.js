class Tiger {
    isDangerous = True;
    energy = 100;
    rr = 'Roarrr'
    constructor(name,height,weight) {
        this.name = name;
        this.height = height;
        this.weight = weight;
    }
    die() {
       this.isDangerous = false;
    }
    angry() {
        this.energy = 100;
        return this.rr;
        
    }

    rest(hour) {
        this.energy = (1 * hour) + this.energy;
    }
    
}
class Cat extends Tiger {
    isDangerous = false;
    energy = 10;
    mm = 'meow'
    constructor(name,height,weight) {
        super(name,height,weight);
    }
    angry() {
        this.energy = 10;
        return this.mm;

    }
    die() {
    this.isDangerous = false;
    }

}
 
const irithel = new Tiger('irithel' , '2' , '200');
const nana = new Cat('nana' , '1' , '10');


console.log(irithel.energy);

console.log(nana);

