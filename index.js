//Objecte Asignatura
var Asignatura = {
    ref: 'BBDD',
    nom: 'Bases de Dades',
    hores: 180,
    UF: ['UF1', 'UF2', 'UF3', 'UF4'],
    professor: 'Pep Parés',
    alumnes: ['alu1', 'alu2', 'alu13', 'alu4', 'alu5']
};

//Objecte library
var library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }];


//1. Aconsegueix les 'keys' de l'objecte
console.info("1. Aconsegueix les 'keys' de l'objecte");
var AsignaturaKeysLlist = Object.keys(Asignatura);


for (i in AsignaturaKeysLlist) {
    console.log(AsignaturaKeysLlist[i]);
}


//2 Esborra la propietat alumnes
console.info("2 Esborra la propietat alumnes");
console.log(Asignatura);
delete Asignatura.alumnes;
console.log(Asignatura);

//3. Longitud objecte
console.info("3.  Longitud objecte");
console.log("Asignatura, TotalKeys:", Object.keys(Asignatura).length);

//4. Autor i títol tots els llibres
console.info("4. Autor i títol tots els llibres");
library.forEach(element => {
    console.log("Autor:", element.author, "| Title", element.title);
});

// 5. Volum d'un cilindre
console.info("5. Volum d'un cilindre");
class Cilibre {
    constructor(radi, altura) {
        this.radi = radi;
        this.altura = altura;
    }
    volum() {
        return Math.PI * Math.pow(this.radi, 2) * this.altura;
    }
}


let cil1 = new Cilibre(1.444, 2);
let cil2 = new Cilibre(3.4414, 2);
console.log(cil1.volum());
console.log(cil2.volum());

// 6. Cercle
console.info("6. Cercle constructor");
class Cercle {
    constructor(radi, color_contorn, color_fons, gruix_contorn) {
        this.radi = radi;
        this.color_contorn = color_contorn;
        this.color_fons = color_fons;
        this.gruix_contorn = gruix_contorn;
    }

    //Funcion dintre d'objecte
    calcularPerimetre() {
        return 2 * Math.PI * this.radi;
    };
    calcularArea() {
        return Math.PI * Math.pow(this.radi, 2);
    };
}

let cercle1 = new Cercle(2.1245, "red", "blue", "green");
let cercle2 = new Cercle(4.4584, "pink", "black", "brown");

console.log(cercle1.calcularPerimetre());
console.log(cercle1.calcularArea());

// 7. Printar Metodes
console.info("7. Printar Metodes");
//Aconsegueix els metodes de Cercle()
let functionsOfCercle = Object.getPrototypeOf(new Cercle());
//Llista els objectes de la anterior cerca
let KeysLlistCercle = Object.getOwnPropertyNames(functionsOfCercle);
KeysLlistCercle.forEach(element => {
    console.log("Funcio de Cercle :", element);
});

//8. Metodes a Matrix
console.info("8. Metodes a Matrix");
//Crea un objecte
let cercleObj1 = new Cercle(3.14, "red", "black", "brown");
//Aconsegueix les keys
var objCercleName = Object.keys(cercleObj1);
//Aconsegueix el valor de les keys
var objCercleValue = Object.values(cercleObj1);
//La matrix final
let matrixDades = [];
for (i in objCercleName) {
    //La primera posicio es 'key' la segona 'value'
    let tempList = []
    tempList.push(objCercleName[i])
    tempList.push(objCercleValue[i])
    //Guarda la array en una matriu
    matrixDades.push(tempList);
}
console.log('Dades Matrix', matrixDades);

console.info("9. Metodes");
class Persona {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
}
let p1 = new Persona("Kevin", "Sama");
var objPersonaKeys = Object.keys(p1);
//Aconsegueix el valor de les keys
var objPersonaValues = Object.values(p1);
let objInvertit = {};
for (let i = 0; i < objPersonaKeys.length; i++) {
    //Crea u nou objecte pero invertint dades
    objInvertit[objPersonaValues[i]] = objPersonaKeys[i]
}
console.log(p1);
console.log(objInvertit);
console.info("10. Metodes");
let newObj = new Persona("Jose", "Peralez");
let propietat = "surname";
console.log(newObj);
console.log("Busca propietat:", propietat);
let esDins = esDinsAquestaPropietat(new Persona(), propietat);
console.log(esDins);

function esDinsAquestaPropietat(myObj, propietat) {
    for (let i = 0; i < Object.keys(myObj).length; i++) {
        //Posa en una variable element
        const element = Object.keys(myObj)[i];
        if (element == propietat) {
            return true;
        }
    }
    return false;
}
