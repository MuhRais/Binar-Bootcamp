class Tiger{

        isDangerous = 'True';
        energy = 100;
        rr = 'Roarrrrr';
    }

    function Const(name,height,weight){
        this.name = name;
        this.height = height;
        this.weight = weight;
    }

    var panggil = new Const('Irithel',150,40)


    function roar() {
        return this.rr;
    };

    function die (){
        this.isDangerous = 'False';
    }

class cat extends Tiger {
    constructor(name,height,weight) {
        super(name,height,weight);
    }
    pet() {
        this.isDangerous = 'False';
    };
    power() {
        this.energy = 10;
        return this.rr;
    }
    sound() {
        this.power = 'meow';
    }

}
    
   
