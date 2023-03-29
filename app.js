
import{crearArchivo} from './helpers/multiplicar.js'
import {argv} from './config/yargs.js'
import * as color from 'colors'



console.clear()



console.log(`La base es : ${argv.base}, la C es : ${argv.c}`)
crearArchivo(argv.base,argv.l,argv.h)
    .then(nombreArchivo => console.log(`${nombreArchivo} creado`))
    .catch(err=> console.log(err))