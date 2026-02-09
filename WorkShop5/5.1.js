const express = require('express');
const app = express();

const students = [
    {id:1, name:"node", age: 18},
    {id:2, name:"express", age: 19},
    {id:3, name:"javascript", age: 20}
];

app.get('/api/students', (req, res) => {
    res.send(students);
})
app.get('/api/students/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const student = students.find(s => s.id === id);

    if (student) {
        res.send(student);
    }
    else {
        res.status(404).send("Error 404: Student not found");
    }
})

app.post('/api/students', (req, res) => {
    const name = req.query.name;
    const age = req.query.age;
    req.push(students);
    res.send(students);
});

app.put('/api/students/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const student = students.find(s => s.id === id);

    if (student) {
        res.format(student);
    }
});

app.delete('/api/students/:id', (req, res) =>{
    const id = parseInt(req.params.id);
    const student = students.find(s => s.id === id);

    if (student) {
        res.delete(student);
    }
})
app.listen(3000, () => {
    console.log('Server running on port 3000');
});