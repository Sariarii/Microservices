class ZooFactory{
    createAnimal(){}
}

class SafariFactory extends ZooFactory{
    createAnimal(){
        return new Mammifere();
    }
}

class AquariumFactory extends ZooFactory{
    createAnimal(){
        return new Poisson();
    }
}

class VoliereFactory extends ZooFactory{
    createAnimal(){
        return new Oiseau();
    }
}

class Mammifere{
    Morpho(){
        console.log("Un mammifère a 4 pattes et une queue.");
    }
}

class Poisson{
    Morpho(){
        console.log("Le poisson respire sous l'eau et fait bloup bloup");
    }
}

class Oiseau{
    Morpho(){
        console.log("L'oiseau ca vole.");
    }
}

function MorphoA(factory){
    const animal = factory.createAnimal();
    animal.Morpho();
}

const safariFactory = new SafariFactory();
MorphoA(safariFactory);

const aquariumFactory = new AquariumFactory();
MorphoA(aquariumFactory);

const voliereFactory = new VoliereFactory();
MorphoA(voliereFactory);