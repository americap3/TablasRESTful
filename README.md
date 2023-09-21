# Tarea | Tablas RESTful (calculadora)

Una de las principales características de un servicio Web  RESTful es el uso explícito de métodos HTTP de una forma que siga el protocolo tal como está definido por RFC 2616.

REST pide a los desarrolladores que utilicen HTTP de forma explícita y de una forma que sea coherente con la definición del protocolo. Este principio básico del diseño de REST establece una correlación individual entre las operaciones de crear, leer, actualizar y borrar (CRUD) y los métodos HTTP. Según esta correlación:

- Para crear un recurso en el servidor hay que utilizar un POST.
- Para recuperar un recurso hay que utilizar un GET.
- Para reemplazar el estado de un recurso, o para reemplazarlo totalmente, hay que utilizar un PUT.
- Para cambiar el estado de un recurso, o para actualizarlo, hay que utilizar un PATCH.
- Para eliminar o borrar un recurso hay que utilizar un DELETE.

### Pre-requisitos

- Node.js
- NPM
- Express.js

## Ejecutando las pruebas

Abrimos nuestra carpeta en una terminal, escribimos el comando

```
node index.js
```

El servidor se correrá en el puerto 4000, nos aparecerá lo siguiente:

```
Server is running on port 4000
```

Ahora, abriremos POSTMAN y crearemos una nueva solicitud

### GET (suma n1 + n2)

1. Establecemos el método de solicitud como GET
2. En la URL, ingresamos la ruta con los valores de n1 y n2 que se desean sumar

```
http://localhost:4000/results/6/2
```

3. Hacemos clic en "Send" para enviar la solicitud y ver el resultado de la suma, tendría que mostrar lo siguiente:

```
{
    "result": 8
}
```

### POST (multiplicar n1 * n2)

1. Establecemos el método de solicitud como POST
2. En la URL, ingresamos esta ruta:

```
http://localhost:4000/results
```

3. En la sección "Body", seleccionamos "raw" y luego "JSON y colocamos los valores de n1 y n2 de esta manera:

```
{
    "n1": 6,
    "n2": 2
}
```

También debemos verificar que el "Content-Type" sea "aplication/json"

4. Hacemos clic en "Send" para enviar la solicitud y ver el resultado de la multiplicación, tendría que mostrar lo siguiente:

```
{
    "result": 12
}
```

### PUT (dividir n1 / n2)

1. Establecemos el método de solicitud como PUT
2. En la URL, ingresamos esta ruta:

```
http://localhost:4000/results
```

3. En la sección "Body", seleccionamos "raw" y luego "JSON y colocamos los valores de n1 y n2 de esta manera:

```
{
    "n1": 6,
    "n2": 2
}
```

También debemos verificar que el "Content-Type" sea "aplication/json"

4. Hacemos clic en "Send" para enviar la solicitud y ver el resultado de la división, tendría que mostrar lo siguiente:

```
{
    "result": 3
}
```

### PATCH (potencia n1 ^ n2)

1. Establecemos el método de solicitud como PATCH
2. En la URL, ingresamos esta ruta:

```
http://localhost:4000/results
```

3. En la sección "Body", seleccionamos "raw" y luego "JSON y colocamos los valores de n1 y n2 de esta manera:

```
{
    "n1": 6,
    "n2": 2
}
```

También debemos verificar que el "Content-Type" sea "aplication/json"

4. Hacemos clic en "Send" para enviar la solicitud y ver el resultado de la operación, tendría que mostrar lo siguiente:

```
{
    "result": 36
}
```

### DELETE (resta n1 - n2)

1. Establecemos el método de solicitud como DELETE
2. En la URL, ingresamos la ruta con los valores de n1 y n2 que se desean sumar

```
http://localhost:4000/results/6/2
```

3. Hacemos clic en "Send" para enviar la solicitud y ver el resultado de la resta, tendría que mostrar lo siguiente:

```
{
    "result": 4
}
```

## Construido con:

* Javascript - Lenguaje de programación
* Express js - Framework
* Postman - Plataforma API
* Visual Studio Code - Editor de texto
* Node js - Entorno en tiempo de ejecución

## Autores

* **América G. Martínez Cano** - 348810

## Información

** Docente: Ing. Luis Antonio Ramírez Martínez **
WEB PLATFORMS
7CC2 | Facultad de Ingeniería | UACH
