class Tiger{

        isDangerous = 'True';
        energy = 100;
       
    }

    constructor(name,height,weight){
        this.name = name;
        this.height = height;
        this.weight = weight;
    }
    roar() {
        return 'roarrr';
    }

    die() {
        this.isDangerous = 'False';
    }
}

class cat extends Tiger {
    constructor(name,height,weight) {
        super(name,height,weight);
            this.isDangerous = false;
            energy = 10;
    }
    roar() {
        return 'meow';
    }

}
    
const macan = new Tiger('macan', '10m', '100kg');
const kucing = new cat('kucing', '5m', '50kg');

console.log(kucing);
