package com.example.spring_boot_tmall.controller;

import com.example.spring_boot_tmall.bean.Product;
import com.example.spring_boot_tmall.service.ProductService;
import com.example.spring_boot_tmall.util.JacksonUtil;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ProductContorller {
    @Autowired
    private ProductService productService;

    @GetMapping("/product{id}")
    public String getProductById(@PathVariable("id") int id) throws JsonProcessingException {
        Product product = productService.getProuductById(id);
        String value = JacksonUtil.writeObjectAsJson(product);

        return value;
    }

    @GetMapping("/product/cid{cid}")
    public String getProductByCId(@PathVariable("cid") int cid) throws JsonProcessingException {
        List<Product> products = productService.getProuductByCId(cid);
        String value = JacksonUtil.writeListAsJson(products);

        return value;
    }

}
