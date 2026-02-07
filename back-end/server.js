const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Configurações iniciais
app.use(cors());
app.use(express.json());

// Rota de teste
app.get('/health', (req, res) => {
    res.send('API rodando');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
}); 