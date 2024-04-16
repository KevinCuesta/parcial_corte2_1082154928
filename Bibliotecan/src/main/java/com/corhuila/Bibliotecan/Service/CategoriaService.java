package com.corhuila.Bibliotecan.Service;

import com.corhuila.Bibliotecan.Entity.Categoria;
import com.corhuila.Bibliotecan.IRepository.ICategoriaRepository;
import com.corhuila.Bibliotecan.IService.ICategoriaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class CategoriaService implements ICategoriaService {
    @Autowired
    private ICategoriaRepository repository;


    @Override
    public List<Categoria> findAll() {
        return repository.findAll();
    }

    @Override
    public Optional<Categoria> findById(Long id) {
        return repository.findById(id);
    }

    @Override
    public Categoria save(Categoria categoria) {
        return repository.save(categoria);
    }

    @Override
    public void update(Categoria categoria, Long id) {
        Optional<Categoria> ps = repository.findById(id);


        if (!ps.isEmpty()){
            Categoria categoriaUpdate = ps.get();
            categoriaUpdate.setNombre(categoria.getNombre());
            categoriaUpdate.setCodeunic(categoria.getCodeunic());

            //Actualizar el objeto cliente
            repository.save(categoriaUpdate);
        }else{
            System.out.println("No existe el cliente");
        }
    }

    @Override
    public void delete(Long id) {
        repository.deleteById(id);
    }
}
