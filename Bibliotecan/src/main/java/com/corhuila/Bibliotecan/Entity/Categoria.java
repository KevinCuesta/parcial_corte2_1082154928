package com.corhuila.Bibliotecan.Entity;

import jakarta.persistence.*;

@Entity
@Table(name = "categoria")
public class Categoria {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nombre", length = 50, nullable = false)
    private String nombre;

    @Column(name = "codeunic", length = 20, nullable = false, unique = true)
    private String codeunic;
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getCodeunic() {
        return codeunic;
    }

    public void setCodeunic(String codeunic) {
        this.codeunic = codeunic;
    }
}
