// server.js
const express = require('express');
const app = express();
const port = 3000; 

app.use(express.json()); 


const users = [
    { id: 1, username: 'user1', password: 'pass123' },
    { id: 2, username: 'user2', password: 'pass456' }
];


app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        res.status(200).json({ message: 'Login bem-sucedido' });
    } else {
        res.status(401).json({ message: 'Credenciais inválidas' });
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
