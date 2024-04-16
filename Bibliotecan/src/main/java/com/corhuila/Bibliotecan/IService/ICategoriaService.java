package com.corhuila.Bibliotecan.IService;

import com.corhuila.Bibliotecan.Entity.Categoria;

import java.util.List;
import java.util.Optional;

public interface ICategoriaService {
    List<Categoria> findAll();
    Optional<Categoria> findById(Long id);
    Categoria save(Categoria categoria);
    void update(Categoria categoria, Long id);
    void delete(Long id);
}
