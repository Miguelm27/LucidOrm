import router from '@adonisjs/core/services/router'
import ClubController from '../../app/controllers/ClubController.js'

const club = new ClubController()

router.get('/club', club.listarClub)

router.post('/club', club.crearClub)

router.get('/club/:cod_club',club.listarClubId)

router.put('/club/:cod_club',club.actualizarClub)

router.delete('/club/:cod_club',club.eliminarClub)

router.get('/conteoClub',club.contadorClub)

