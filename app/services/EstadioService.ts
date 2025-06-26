import Estadio from "#models/estadio";

class EstadioService {
  async crear(data) {
    return await Estadio.create(data);
  }

  async listar() {
    return await Estadio.query();
  }

  async buscarId(cod_estadios: number) {
    return await Estadio.query().where('cod_estadios', cod_estadios);
  }

  async actualizar(cod_estadios: number, data) {
    const estadio = await Estadio.findByOrFail(cod_estadios);
    estadio.merge(data);
    return await estadio.save();
  }

  async eliminar(cod_estadios: number) {
    const estadio = await Estadio.findByOrFail(cod_estadios);
    await estadio.delete();
    return "Estadio eliminado correctamente";
  }

  async conteo() {
    const resultado = await Estadio.query().count('* as conteo');
    return resultado[0].$extras.conteo;
  }
}

export default EstadioService;
