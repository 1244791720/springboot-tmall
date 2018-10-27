package com.example.spring_boot_tmall.service;

import com.example.spring_boot_tmall.bean.Product;
import com.example.spring_boot_tmall.mapper.ProductMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductMapper productMapper;

    public List<Product> getAllProduct(){
        return productMapper.getAllProduct();
    }

    public Product getProuductById(int id) {
        return productMapper.getProuductById(id);
    }

    public List<Product> getProuductByCId(int cid) {
        return productMapper.getProuductByCId(cid);
    }

}
