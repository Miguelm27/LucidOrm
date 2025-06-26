import router from "@adonisjs/core/services/router";
import EstadioController from '#controllers/EstadioController'

const estadio = new EstadioController()

router.post('/estadios', estadio.crearEstadio)

router.get('/estadios', estadio.listarEstadio)

router.get('/estadios/:cod_estadios', estadio.listarEstadioId)

router.put('/estadios/:cod_estadios', estadio.actualizarEstadio)

router.delete('/estadios/:cod_estadios', estadio.eliminarEstadio)

router.get('/estadios/conteo', estadio.contadorEstadio)
