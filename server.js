// importar express
const express = require('express');

// iniciar express
const app = express();

// nome da porta que o heroku ira rodar a aplicação. Se não houver, será usado a 8080
const PORT = process.env.PORT || 8080;
const appName = 'ms-email-fe';

// local onde build ira gerar os arquivos
const outputPath = `${__dirname}/dist/${appName}`;
console.log(outputPath);

// seta o diretorio de build para servir o conteudo Angular
app.use(express.static(outputPath));

// redirecionar qualquer requisicao para o index.html
app.get('/*', (req, res) => {
    res.sendFile(__dirname + `${outputPath}/index.html`)
});


// ouvir a porta que o Heroku disponibilizar
app.listen(PORT, () => {
    console.log('Servidor iniciado na porta' + PORT)
});