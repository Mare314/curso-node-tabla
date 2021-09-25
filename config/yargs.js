const argv = require( 'yargs' )
    .option( 'b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar.'
    } )
    .option( 'l', {
        alias: 'listar',
        type: 'boolean',
        // demandOption: true,
        default: false,
        describe: 'Muestra la tabla en consola.'
    } )
    .check( ( argv, options ) => {
        if( isNaN( argv.b ) ){
            throw 'La base debe ser un número'
        }
        return true;
    } )
    .option( 'h', {
        alias: 'hasta',
        type: 'number',
        demandOption: true,
        default: 10,
        describe: 'Es el número de iteraciones que tendrá la tabla de multiplicar.'
    } )
    .check( ( argv, options ) => {
        if( isNaN( argv.h ) ){
            throw 'El límite debe ser un número.'
        }
        return true;
    } )
    .argv;

module.exports = argv;