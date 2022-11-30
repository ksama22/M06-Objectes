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
console.log("Asignatura, TotalKeys:", AsignaturaKeysLlist.length);

//4. Autor i títol tots els llibres
console.info("4. Autor i títol tots els llibres");
library.forEach(element => {
    console.log("Autor:", element.author, "| Title", element.title);
});

// 5. Volum d'un cilindre
console.info("5. Volum d'un cilindre");
function Cilibre(radi, altura) {
    this.radi = radi;
    this.altura = altura;
    //Funcion dinte d'objecte
    this.volum = function () {
        return this.radi * this.altura * 2;
    }
}

let cil1 = new Cilibre(1.44, 2);
let cil2 = new Cilibre(3.44, 2);
console.log(cil1.volum());
console.log(cil2.volum());

