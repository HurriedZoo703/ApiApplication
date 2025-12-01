# Admin Panel API

API REST para el panel de administración usando JSON Server.

## 🚀 Despliegue en Render

### Pasos para desplegar:

1. **Crear repositorio en GitHub**

   - Sube la carpeta `api` a un nuevo repositorio en GitHub

2. **Crear cuenta en Render**

   - Ve a [render.com](https://render.com) y crea una cuenta

3. **Crear nuevo Web Service**

   - Click en "New +" → "Web Service"
   - Conecta tu repositorio de GitHub
   - Configura:
     - **Name**: admin-panel-api
     - **Environment**: Node
     - **Build Command**: `npm install`
     - **Start Command**: `npm start`
   - Click en "Create Web Service"

4. **Obtener URL de la API**
   - Una vez desplegado, tendrás una URL como:
   - `https://admin-panel-api.onrender.com`

## 📡 Endpoints Disponibles

### Usuarios

| Método | Endpoint                     | Descripción                    |
| ------ | ---------------------------- | ------------------------------ |
| GET    | /usuarios                    | Obtener todos los usuarios     |
| GET    | /usuarios/:id                | Obtener usuario por ID         |
| GET    | /usuarios?identificacion=xxx | Buscar por identificación      |
| GET    | /usuarios?nombres_like=xxx   | Buscar por nombres (parcial)   |
| GET    | /usuarios?apellidos_like=xxx | Buscar por apellidos (parcial) |
| GET    | /usuarios?email_like=xxx     | Buscar por email (parcial)     |
| POST   | /usuarios                    | Crear nuevo usuario            |
| PUT    | /usuarios/:id                | Actualizar usuario completo    |
| PATCH  | /usuarios/:id                | Actualizar parcialmente        |
| DELETE | /usuarios/:id                | Eliminar usuario               |

### Proyectos

| Método | Endpoint       | Descripción                 |
| ------ | -------------- | --------------------------- |
| GET    | /proyectos     | Obtener todos los proyectos |
| GET    | /proyectos/:id | Obtener proyecto por ID     |
| POST   | /proyectos     | Crear nuevo proyecto        |
| PUT    | /proyectos/:id | Actualizar proyecto         |
| DELETE | /proyectos/:id | Eliminar proyecto           |

## 🧪 Desarrollo Local

```bash
# Instalar dependencias
npm install

# Iniciar servidor en modo desarrollo
npm run dev

# La API estará disponible en http://localhost:3000
```

## 📋 Ejemplos de Respuestas

### GET /usuarios

```json
[
  {
    "id": 1,
    "identificacion": "1001234567",
    "nombres": "Juan",
    "apellidos": "Pérez",
    "fechaNacimiento": "1990-05-15",
    "genero": "Masculino",
    "email": "juan.perez@email.com"
  }
]
```

### POST /usuarios

**Request:**

```json
{
  "identificacion": "1009999999",
  "nombres": "Pedro",
  "apellidos": "López",
  "fechaNacimiento": "1995-03-20",
  "genero": "Masculino",
  "email": "pedro.lopez@email.com"
}
```

**Response (201 Created):**

```json
{
  "id": 3,
  "identificacion": "1009999999",
  "nombres": "Pedro",
  "apellidos": "López",
  "fechaNacimiento": "1995-03-20",
  "genero": "Masculino",
  "email": "pedro.lopez@email.com",
  "createdAt": "2025-12-01T10:30:00.000Z"
}
```
