import express from 'express'
import cors from 'cors'
import {createClass} from "./endpoints/class/createClass"
import {createTeacher} from "./endpoints/teachers/createTeacher"
import {createStudent} from "./endpoints/students/createStudent"
import {getAllClasses} from "./endpoints/class/getAllClasses"
import {getAllStudents} from "./endpoints/students/getAllStudents"
import {getAllTeachers} from "./endpoints/teachers/getAllTeachers";

const app = express()
app.use(express.json())
app.use(cors())

app.get("/class", getAllClasses)
app.get("/teacher", getAllTeachers)
app.get("/student", getAllStudents)
app.post("/class", createClass)
app.post("/teacher", createTeacher)
app.post ("/student", createStudent)



app.listen(3003, ()=>{
    console.log('Server running at http://localhost:3003')
})
