const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Puerto para Render (usa variable de entorno o 3000)
const PORT = process.env.PORT || 3000;

// Middlewares por defecto (logger, static, cors, no-cache)
server.use(middlewares);

// Middleware para parsear JSON
server.use(jsonServer.bodyParser);

// Middleware personalizado para respuestas consistentes
server.use((req, res, next) => {
  // Agregar timestamp a las respuestas
  if (req.method === 'POST') {
    req.body.createdAt = new Date().toISOString();
  }
  if (req.method === 'PUT' || req.method === 'PATCH') {
    req.body.updatedAt = new Date().toISOString();
  }
  next();
});

// Usar el router de JSON Server
server.use(router);

// Iniciar servidor
server.listen(PORT, () => {
  console.log(`🚀 JSON Server está corriendo en el puerto ${PORT}`);
  console.log(`📍 Endpoints disponibles:`);
  console.log(`   - GET    /usuarios`);
  console.log(`   - GET    /usuarios/:id`);
  console.log(`   - POST   /usuarios`);
  console.log(`   - PUT    /usuarios/:id`);
  console.log(`   - DELETE /usuarios/:id`);
  console.log(`   - GET    /proyectos`);
  console.log(`   - GET    /proyectos/:id`);
  console.log(`   - POST   /proyectos`);
  console.log(`   - PUT    /proyectos/:id`);
  console.log(`   - DELETE /proyectos/:id`);
});
