import yargs from 'yargs'
export const argv = yargs(process.argv.slice(2))
        .option('b',{
            alias:'base',
            type:'number',
            demandOption:true,
            describe:'Es la base de la tabla de multiplicar'
        })
        .check((argv,options)=>{
            if(isNaN(argv.b)){
                throw 'La base debe ser un número'
            }

            
            else{
                return true
            }
        })
        .option('l',{
            alias:'listar',
            type:'boolean',
            default:false,
            describe:'Muestra la lista de la tabla'
                })
        .option('h',{
            alias:'hasta',
            type:'number',
            default:10,
            describe:'Numero hasta donde se quiere la tabla'

        })        
        .argv
