package com.example.spring_boot_tmall.mapper;

import com.example.spring_boot_tmall.bean.Product;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductMapper {

    List<Product> getAllProduct();

    Product getProuductById(int id);

    List<Product> getProuductByCId(int cid);
}
