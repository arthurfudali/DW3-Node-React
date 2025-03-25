# DW3
Repositório para uso durante as aulas de Desenvolvimento Web 3 - MongoDB, Express, React, Node.JS

# Como rodar a API
## 1.
No terminal do diretório da API, rode `npm install` para instalar os pacotes do NodeJS
Em seguida, faça a instalação das bibliotecas nodemon, express, mongodb, mongoose e dotenv com `npm install nomeDoPacote` se for necessário.
## 2.
Na raiz do diretório, crie o arquivo de variáveis de ambiente `.env`, e, dentro desse arquivo, adicione a variavél da senha do seu Cluster: `DB_PASSWORD = SenhaSuperSecreta`
## 3. 
No arquivo `/config/ds-connection.js`, altere a string de conexão

`mongodb+srv://arthurfudali:${process.env.DB_PASSWORD}@cluster0.79onb.mongodb.net/api-the-game?retryWrites=true&w=majority&appName=Cluster0` 

e substitua o usuário que vem após `mongodb+srv://` pelo seu usuário de acesso ao Cluster

Substitua também `api-the-game` pelo nome da coleção que usará
## 4.
Rode a API com `npm start` no terminal
