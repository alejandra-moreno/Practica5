package com.example.demo.bean;

public class Cliente {

    private String nombre;
    private String apellido;
    private String email;
    private String cumpleaños;
    private String dni;
    private Integer edad;
    private String contraseña;
    private String contraseña2;

    public Cliente(String nombre, String apellido, String email, String cumpleaños, String dni, Integer edad, String contraseña, String contraseña2) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.cumpleaños = cumpleaños;
        this.dni = dni;
        this.edad = edad;
        this.contraseña = contraseña;
        this.contraseña2 = contraseña2;
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

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCumpleaños() {
        return this.cumpleaños;
    }

    public void setCumpleaños(String cumpleaños) {
        this.cumpleaños = cumpleaños;
    }

    public String getdni() {
        return this.dni;
    }

    public void setdni(String dni) {
        this.dni = dni;
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

    public String getgetContraseña2() {
        return this.contraseña2;
    }

    public void setgetContraseña2(String contraseña2) {
        this.contraseña2 = contraseña2;
    }

    

    @Override
    public String toString() {
        return "{" +
            " Nombre: '" + getNombre() + "'" +
            ", Apellido(s): '" + getApellido() + "'" +
            ", Email: '" + getEmail() + "'" +
            "; dni: '" + getdni() + "'" +
            "; Cumpleaños: '" + getCumpleaños() + "'" +
            ", Edad: '" + getEdad() + "'" +
            "}";
    }


}