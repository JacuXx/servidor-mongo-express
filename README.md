# 🧠 Backend Básico con Node.js, Express y MongoDB

Este proyecto es una API REST básica desarrollada con **Node.js**, **Express** y **Mongoose**. Permite crear y listar usuarios en una base de datos MongoDB. Ideal como introducción al desarrollo de backends con tecnologías modernas.

---

## 🚀 Tecnologías utilizadas

- Node.js
- Express
- MongoDB + Mongoose
- Dotenv

---

## 📁 Estructura del Proyecto

```
mi-backend/
│
├── models/
│   └── User.js
│
├── routes/
│   └── userRoutes.js
│
├── .env
├── index.js
└── package.json
```

---

## ⚙️ Instalación y ejecución

### 1. Clona el repositorio

```bash
git clone https://github.com/JacuXx/servidor-mongo-express.git
cd tu-repo
```

### 2. Instala las dependencias

```bash
npm install
```

### 3. Configura el entorno

Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/mi_base_de_datos
```

Asegúrate de tener MongoDB instalado y corriendo en tu máquina.

### 4. Ejecuta el servidor

```bash
node index.js
```

---

## 🔄 Endpoints de la API

| Método | Ruta                   | Descripción                  |
|--------|------------------------|------------------------------|
| POST   | `/api/users`           | Crea un nuevo usuario        |
| GET    | `/api/users`           | Lista todos los usuarios     |

### Ejemplo de body para POST:

```json
{
  "name": "Juan Perez",
  "email": "juan@example.com"
}
```

---

## 🧪 Pruebas

Puedes probar la API con herramientas como **Postman** o **cURL**.

---

## 📌 Notas

- MongoDB debe estar en ejecución localmente para que el proyecto funcione.
- Puedes extender este backend agregando autenticación, validaciones, manejo de errores y más modelos de datos.

---

## 🤝 Licencia

Este proyecto es de uso libre para fines educativos.