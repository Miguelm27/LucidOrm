/*logica de negocio consultar utilizando funciones
create,query listar*/
//importacion del modelo where,find
import Paise from "#models/paise";

class PaisService{
    async crear(datos){
        return await Paise.create(datos)
    }
    async listar(){
        return await Paise.query()

    }
    async listarId(cod_pais){
        return await Paise.query().where('cod_pais',cod_pais)
    }
    async actualizar(cod_pais:number, datos:{nombre_pais:string, comunitario:boolean}) {
    const lista = await Paise.find(cod_pais)
    lista.nombre_pais=datos.nombre_pais
    lista.comunitario=datos.comunitario
    await lista.save()
    return lista;
}
    async eliminar(cod_pais:number){
        const encontrado=await Paise.find(cod_pais)
        if(encontrado){
             await encontrado.delete()
            return "eliminado"

        }else{
            return "no eliminado"
        }
    }
    async conteo(){
        const resultado=await Paise.query().count('* as conteo')
        return resultado[0].$extras.conteo
    }





/*
async actualizar(cod_pais, datos) {
    const lista = await Paise.query().where('cod_pais', cod_pais).firstOrFail()

    lista.merge(datos)
    await lista.save()
    return lista
}
*/
}
export default PaisService;