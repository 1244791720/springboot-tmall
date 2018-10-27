package com.example.spring_boot_tmall.service;

import com.example.spring_boot_tmall.bean.Product;
import com.example.spring_boot_tmall.bean.ProductImage;
import com.example.spring_boot_tmall.mapper.ProductImageMapper;
import com.example.spring_boot_tmall.mapper.ProductMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductImageService {

    @Autowired
    private ProductImageMapper productImageMapper;

    public List<ProductImage> getAllProduct(int pid){
        return productImageMapper.getProductImgsByPid(pid);
    }



}
