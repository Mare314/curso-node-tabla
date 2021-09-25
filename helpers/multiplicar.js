const fs = require('fs');
const colors = require('colors');

const crearTabla = async( base = 4, listar = false, hasta = 10 ) => {
    try {
        let salida = '';
        let consola = '';
    
        salida += `==================\n`;
        salida += `   Tabla del ${ base }\n`;
        salida += `==================\n`;
        
        consola += `==================\n`.red;
        consola += `   Tabla del ${ colors.yellow( base ) }\n`.cyan;
        consola += `==================\n`.red;
        
        for (let i = 1; i <= hasta; i++) {
            salida += `${ base } x ${ i } = ${ base * i}\n`; 
            consola += `${ base } ${ 'x'.red } ${ i } ${ '='.red } ${ base * i}\n`; 
        }
        
        if( listar ){
            console.log( consola );
        }
    
        fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida);
        return `tabla-${ base }.txt`;        
    } 
    catch ( err ) {
        throw err;
    }
}

module.exports = {
    crearTabla
}