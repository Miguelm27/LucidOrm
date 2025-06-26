import EstadioService from "#services/EstadioService";

const estadioService = new EstadioService();

class EstadioController {
  async crearEstadio({ request, response }) {
    try {
      const data = request.only([
        "estadio",
        "direccion",
        "cod_postal",
        "poblacion",
        "provincia",
        "capacidad",
        "sentados",
        "inauguracion",
        "dimensiones",
        "cod_club"
      ]);

      const nuevoEstadio = await estadioService.crear(data);
      return response.json({ msj: "Estadio creado", datos: nuevoEstadio });
    } catch (error) {
      return response.json({ error: error.message });
    }
  }

  async listarEstadio({ response }) {
    try {
      const lista = await estadioService.listar();
      return response.json({ msj: lista });
    } catch (error) {
      return response.json({ error: error.message });
    }
  }

  async listarEstadioId({ params, response }) {
    try {
      const cod_estadios = Number(params.cod_estadios);
      const estadio = await estadioService.buscarId(cod_estadios);
      return response.json({ mensaje: estadio });
    } catch (error) {
      return response.json({ error: error.message });
    }
  }

  async actualizarEstadio({ params, request, response }) {
    try {
      const cod_estadios = Number(params.cod_estadios);
      const data = request.only([
        "estadio",
        "direccion",
        "cod_postal",
        "poblacion",
        "provincia",
        "capacidad",
        "sentados",
        "inauguracion",
        "dimensiones",
        "cod_club"
      ]);

      const actualizado = await estadioService.actualizar(cod_estadios, data);
      return response.json({ msj: "Estadio actualizado", datos: actualizado });
    } catch (error) {
      return response.json({ error: error.message });
    }
  }

  async eliminarEstadio({ params, response }) {
    try {
      const cod_estadios = Number(params.cod_estadios);
      const resp = await estadioService.eliminar(cod_estadios);
      return response.json({ msj: resp });
    } catch (error) {
      return response.json({ error: error.message });
    }
  }

  async contadorEstadio({ response }) {
    try {
      const resultado = await estadioService.conteo();
      return response.json({ msj: resultado });
    } catch (error) {
      return response.json({ error: error.message });
    }
  }
}

export default EstadioController;
