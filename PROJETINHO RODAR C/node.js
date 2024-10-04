const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { exec } = require('child_process');
const fs = require('fs').promises;
const path = require('path');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 3001;

app.post('/compile', async (req, res) => {
  try {
    const { code } = req.body;
    
    // Gerar um ID único para este código
    const id = Date.now().toString();
    const directory = path.join(__dirname, 'temp', id);
    const filePath = path.join(directory, 'main.c');
    
    // Criar diretório temporário e salvar o código
    await fs.mkdir(directory, { recursive: true });
    await fs.writeFile(filePath, code);
    
    // Compilar e executar o código em um container Docker
    const compileCmd = `docker run --rm -v ${directory}:/usr/src/app gcc:latest bash -c "cd /usr/src/app && gcc main.c -o main && ./main"`;
    
    exec(compileCmd, { timeout: 5000 }, (error, stdout, stderr) => {
      // Limpar o diretório temporário
      fs.rmdir(directory, { recursive: true });
      
      if (error) {
        console.error(`Erro de execução: ${error}`);
        return res.status(500).json({ error: 'Erro na compilação ou execução', details: stderr });
      }
      res.json({ output: stdout });
    });
  } catch (err) {
    console.error(`Erro: ${err}`);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});