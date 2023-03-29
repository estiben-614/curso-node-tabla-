import * as fs from 'node:fs'
import * as color from 'colors'


export const crearArchivo=async(base,listar,hasta)=>{
    
        try{
            
                let salida=''
                let consola=''
                for (let i=1;i<=hasta;i++){
                let result=base*i
                consola+=(`${base} x ${i} = ${result} \n`).rainbow
                salida+=(`${base} x ${i} = ${result} \n`)
                 }
                 // SI SE RECIBE EN CONSOLA -L, LISTA LA TABLA
                 if(listar){
                    console.log(consola)
                 }
            
            
    
    // fs.writeFile(`tabla-${base}.txt`,salida,(err)=>{
    //     if(err) throw err
    
    //     console.log(`El archivo tabla-${base}.txt fue creado`)
    // })
    
            fs.writeFileSync(`./salida/tabla-${base}.txt`,salida)
            let nombreArchivo=''
            //nombre archivo es lo que se devolvera en la promesa
            return nombreArchivo=`tabla-${base}.txt`
        
        }
        catch (err){
            return err
        }
    
   
}

