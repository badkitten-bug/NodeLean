const empleados = [
    {
        id: 1,
        nombre: 'Fernando'
    },
    {
        id: 2,
        nombre: 'Linda'
    },
    {
        id: 3,
        nombre: 'Karen'
    }
];
const salarios = [
    {
        id: 1,
        salario: '1000'
    },
    {
        id: 2,
        salario: '2000'
    },
    
];

const getEmpleado = (id) => {

    return new Promise( (resolve, reject) => {

    const empleado = empleados.find( e => e.id === id)?.nombre;

        (empleado)
            ? resolve(empleado)
            :reject (`El empleado con id ${id} no existe`);
        
    });
}

const getSalario = (id) => {
    return new Promise( (resolve, reject) => {

        const salario = salarios.find( s => s.id === id)?.salario;
    
            (salario)
                ? resolve(salario)
                :reject (`El salario con id ${id} no existe`);
            
        });
    }

const getInfoUsuario = async(id) => {

    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);
        return `El salario del empleado ${empleado} es de ${salario}`;
    } catch (error) {
        throw error;
    }
}

const id = 2;

getInfoUsuario(id)
    .then(msg => {
        console.log('TODO BIEN');
        console.log(msg);
    } )

    .catch(err => {
        console.log('TODO MAL');
       
        console.log(err);
    });

