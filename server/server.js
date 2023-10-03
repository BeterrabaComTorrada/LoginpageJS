const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Servir arquivos estáticos (HTML, CSS, etc.) a partir do diretório 'public'
app.use(express.static(path.join(__dirname, '../public')));

// Rota específica para servir o bundle.js com o tipo MIME correto
app.get('/bundle.js', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/bundle.js'));
});

// Rota padrão para servir o index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
