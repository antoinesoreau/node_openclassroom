const http = require('http');
const app = require('./app');

app.set('port', process.env.PORT || 3000); // Définit le port d'écoute de l'application
const server = http.createServer(app);

server.listen(process.env.PORT || 3000); // Le serveur écoute sur le port 3000 ou un port défini dans les variables d'environnement
