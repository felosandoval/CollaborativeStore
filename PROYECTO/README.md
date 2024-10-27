# INF225-2023-2-Proyecto Base

## Requerimientos

Para utilizar el proyecto base debe tener instalado [Node.js](https://nodejs.org/en), [Docker](https://www.docker.com/) y se recomienda [Postman](https://www.postman.com/) para poder probar los endpoints de la api.

## Puntos a Considerar
La solución a desarrollar debe seguir los siguientes lineamientos (imagen referecial al final):
* Se debe considerar dos API's estás se encargarán de cada servicio.
* Cada API contará con una base de datos mysql.
* Las API's deben ser construidas utilizando [Node.js](https://nodejs.org/en)


![Arquitectura de Proyecto](https://i.ibb.co/NnVWSNB/proyecto-base-drawio.png)
## Levantando el proyecto
### Bases de Datos
Iniciaremos levantando la imagen de mysql en docker. En una terminal escriba el siguiente comando:
```
docker run -d -p 3306:3306 --name mysql-db -e MYSQL_ROOT_PASSWORD=password mysql
```
Una vez creada la imagen, crearemos las bases de datos. Para esto debemos entrar en el contendor, con el siguiente comando:
```
docker exec -it mysql-db mysql -p
```
Aqui les pedirá una password, esta es ***password***
Una vez dentro del contenedor podemos crear las bases de datos. 
```
create database Nombre;
```
Donde Nombre, deberá ser sustituido por: BDXX_APIY, BDXX_APIY, donde XX corresponde al número de su grupo y APIY el nombre del servicio.

### API's
Deben crear un archivo con el nombre .env en la carpeta raíz. Este debe contener lo siguiente:
```js
PORT_API = 8080
DB_USER = "root"
DB_PASSWORD = "password"
DB_NAME = "Nombre de la base de datos"
DB_PORT = 3306
DB_HOST = "host.docker.internal"
```
***Nota: deben cambiar DB_NAME por el nombre que le pusieron a la base de datos (BDXX_API)***
Una vez creado el archivo, deben ir a la terminal y levantar el contenedor
```
docker-compose up --build -d
```
Una vez levantado deberían poder ver en docker sus contenedores corriendo, pueden probar el siguiente end-point en postman para verificarlo.
```
GET: localhost:8080/createTable
```
Deben replicar este proceso para la otra Api.

[Video con la explicación](https://youtu.be/AeZUu8d29_4)
### Enjoy!

