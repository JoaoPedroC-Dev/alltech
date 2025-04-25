const express = require('express');
const corsMiddleware = require('./middlewares/corsMiddleware');
const socialRoutes = require('./routes/socialRoutes');

const app = express();
const PORT = 3000;

// Middlewares
app.use(express.json());
app.use(corsMiddleware);

// Rotas
app.use('/api', socialRoutes);

// Rota padrão
app.get('/', (req, res) => {
  res.send('Consciência Digital');
});

// Inicia servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});