import express from 'express'
const app = express()

// configuração do express
app.use(express.urlencoded({extended: false}))
app.use(express.json())

// Iniciando o servidor
const port = 4000
app.listen(port, (error)=>{
    if(error){
        console.log(error)
    } else{
        console.log(`API rodando em http://localhost:${port}`)
    }
})