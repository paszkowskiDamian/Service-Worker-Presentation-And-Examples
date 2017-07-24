import express from 'express'
import { join } from 'path'
import cors from 'cors'

const app = express()

app.use(cors())

app.use(express.static(join(__dirname, 'data'), { index: false, extensions: ['json'] }))

app.get('/', (request, response) => {
    response.send('hello World')
})

app.listen(3030, () => {
    console.log('Listening on 3030')
})