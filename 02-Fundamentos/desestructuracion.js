


const deadpool = {
    nombre: 'wade',
    apellido: 'winston',
    poder: 'regeneracion',
    getNombre() {
        return `${this.nombre} ${this.apellido} ${this.poder}`
    }
}

//const poder = deadpool.poder;
//const nombre = deadpool.nombre;
//const apellido = deadpool.apellido;
 
function imprimeHeroe({nombre, apellido, poder, edad = 0}) {
    nombre = 'juan';
    console.log(nombre, apellido, poder, edad);
}
//let { nombre, apellido,poder, edad} = deadpool;
//console.log(nombre, apellido, poder, edad);

const heroes = ['Deadpool', 'Superman', 'Batman'];

//const h1 = heroes[0];
//const h2 = heroes[1];
//const h3 = heroes[2];
const [, , h3] = heroes;

console.log(h3);