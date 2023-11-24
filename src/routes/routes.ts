import { Router, Request, Response } from 'express'

const router = Router()

router.get('/veiculo', (req: Request, res: Response) => {
    res.send('Sucesso!')
})

export default  router