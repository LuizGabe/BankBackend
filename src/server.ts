import express from 'express'

const App = express()
const port = 3000

App.get('/hello', (req: any, res: any) => {
    res.send('hello world!')
})

App.listen(port, () => {
    console.log(`Server Iniciado na porta ${port}`)
})