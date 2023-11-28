import { Router, Request, Response } from 'express'
import { get, post } from '../controllers/controller'


const router = Router()

router.get('/veiculo', get)
router.post('/veiculo', post)

export default  router