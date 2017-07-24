import express from 'express'
import { join } from 'path'

const app = express()


app.use(express.static(join(__dirname, 'data'), { index: false, extensions: ['json'] }))

app.get('/', (request, response) => {
    response.send('hello World')
})

app.listen(3030, () => {
    console.log('Listening on 3030')
})