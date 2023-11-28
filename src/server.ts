import express from 'express'

import { json } from 'body-parser'

import router from './routes/routes'

const app = express()

app.use(json())

app.use('/locadora', router)

const port = process.env.PORT || 3333

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`)
})



