const { crearTabla } = require('./helpers/multiplicar');
require('colors');
const argv = require('./config/yargs');

console.clear();

// console.log(process.argv);

// const [ , , arg3 = 'base=0' ] = process.argv;
// const [ , base = 0 ] = arg3.split( '=' );

// const base = 69;

crearTabla( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado.'))
    .catch( err => console.log( err ) );