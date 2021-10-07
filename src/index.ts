import express from 'express'
import cors from 'cors'
import { createClass } from "./endpoints/class/createClass";

const app = express()
app.use(express.json())
app.use(cors())


app.post('/class', createClass)




app.listen(3003, ()=>{
    console.log('Server running at http://localhost:3003')
})
