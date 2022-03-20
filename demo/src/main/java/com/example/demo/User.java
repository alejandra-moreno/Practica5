package com.example.demo;

public class User {

    private String nombre;
    private String apellido;
    private String correo;
    private String cumpleaños;
    private Integer edad;
    private String contraseña;

    public User(String nombre, String apellido, String correo, String cumpleaños, Integer edad, String contraseña) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.cumpleaños = cumpleaños;
        this.edad = edad;
        this.contraseña = contraseña;
    }

    public String getNombre() {
        return this.nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return this.apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getCorreo() {
        return this.correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public String getCumpleaños() {
        return this.cumpleaños;
    }

    public void setCumpleaños(String cumpleaños) {
        this.cumpleaños = cumpleaños;
    }

    public Integer getEdad() {
        return this.edad;
    }

    public void setEdad(Integer edad) {
        this.edad = edad;
    }

    public String getContraseña() {
        return this.contraseña;
    }

    public void setgetContraseña(String contraseña) {
        this.contraseña = contraseña;
    }

    @Override
    public String toString() {
        return "{" +
            " Nombre: '" + getNombre() + "'" +
            ", Apellidos: '" + getApellido() + "'" +
            ", Correo electrónico: '" + getCorreo() + "'" +
            "; Cumpleaños: '" + getCumpleaños() + "'" +
            ", Edad: '" + getEdad() + "'" +
            "}";
    }


}