# Práctica 5

[![](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/alejandra-moreno/Practica5)

El objetivo de esta práctica era conectar un formulario de registro de usuarios con un endpoint implementado mediante Spring Boot como se ha visto en las clases de teoría. Para ello, primero se ha creado un formulario html en un fichero index.html y después su respectivo fichero index.js. Por otro lado, tenemos 3 archivos .java (una clase con el objeto user, un controller y el fichero que inicializa la aplicación) desarrollados tras hacer la inicialización de Spring Boot mediante el enlace https://start.spring.io/. En el archivo de javascript se realizan las peticiones fetch de los verbos GET y POST, haciendo uso de las funciones que se han creado en el controller. El formulario recoge distinta información del usuario (nombre, apellido, correo electrónico, edad, fecha de nacimiento y contraseña) y la imprime por pantalla tras hacer ciertas comprobaciones (por ejemplo que el formato del correo electrónico sea adecuado).


![Capture](https://user-images.githubusercontent.com/71815685/159175840-4782a456-c83f-4e71-8031-fb657d895003.JPG)
