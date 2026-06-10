# Service Manager

API de gestión de servicios construida con Node.js. Permite crear, consultar, actualizar y eliminar servicios mediante un módulo en memoria.

---

## Instalación

```bash
npm install
```

---

## Configuración

Copiá el archivo de ejemplo y completá las variables:

```bash
cp .env.example .env
```

Editá `.env` con tus valores:

```
PORT=8080
NODE_ENV=development
```

---

## Ejecución

```bash
npm start
```

Si alguna variable de entorno requerida no está definida, la app falla al iniciar con un mensaje indicando cuál falta.

---

## Variables de entorno

| Variable    | Descripción                              | Ejemplo       |
|-------------|------------------------------------------|---------------|
| `PORT`      | Puerto en el que corre la aplicación     | `8080`        |
| `NODE_ENV`  | Entorno de ejecución                     | `development` |

---

## Recurso: `services`

Cada servicio tiene la siguiente estructura:

| Campo         | Tipo      | Descripción                              |
|---------------|-----------|------------------------------------------|
| `id`          | `number`  | Identificador único (generado automáticamente) |
| `name`        | `string`  | Nombre del servicio                      |
| `description` | `string`  | Descripción del servicio                 |
| `duration`    | `number`  | Duración en minutos                      |
| `price`       | `number`  | Precio                                   |
| `category`    | `string`  | Categoría del servicio                   |
| `available`   | `boolean` | Si el servicio está disponible           |

---

## Métodos del ServiceManager

### `getServices()`

Devuelve todos los servicios registrados.

```js
import { getServices } from './src/services/ServiceManager.js'

const services = getServices()
console.log(services)
// []
```

---

### `getServiceById(id)`

Devuelve el servicio con el `id` indicado, o `null` si no existe.

```js
import { getServiceById } from './src/services/ServiceManager.js'

const service = getServiceById(1)
console.log(service)
// { id: 1, name: 'Corte de pelo', ... } | null
```

---

### `addService(serviceData)`

Agrega un nuevo servicio. El `id` se genera automáticamente. Devuelve el servicio creado, o un objeto `{ error }` si faltan campos requeridos.

Campos requeridos: `name`, `description`, `duration`, `price`, `category`, `available`.

```js
import { addService } from './src/services/ServiceManager.js'

const result = addService({
  name: 'Corte de pelo',
  description: 'Corte clásico para caballeros',
  duration: 30,
  price: 1500,
  category: 'Peluquería',
  available: true
})

console.log(result)
// { id: 1, name: 'Corte de pelo', description: '...', duration: 30, price: 1500, category: 'Peluquería', available: true }

const invalid = addService({ name: 'Incompleto' })
console.log(invalid)
// { error: 'Falta el campo requerido: description' }
```

---

### `updateService(id, updatedData)`

Actualiza los campos indicados del servicio. No permite modificar el `id`. Devuelve el servicio actualizado, o `null` si no existe.

```js
import { updateService } from './src/services/ServiceManager.js'

const updated = updateService(1, { price: 2000 })
console.log(updated)
// { id: 1, name: 'Corte de pelo', ..., price: 2000, ... }

const notFound = updateService(99, { price: 2000 })
console.log(notFound)
// null
```

---

### `deleteService(id)`

Elimina el servicio con el `id` indicado. Devuelve el servicio eliminado, o `null` si no existe.

```js
import { deleteService } from './src/services/ServiceManager.js'

const deleted = deleteService(1)
console.log(deleted)
// { id: 1, name: 'Corte de pelo', ... }

const notFound = deleteService(99)
console.log(notFound)
// null
```