package com.example.spring_boot_tmall.controller;

import com.example.spring_boot_tmall.bean.Product;
import com.example.spring_boot_tmall.bean.ProductImage;
import com.example.spring_boot_tmall.service.ProductImageService;
import com.example.spring_boot_tmall.service.ProductService;
import com.example.spring_boot_tmall.util.JacksonUtil;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ProductImageContorller {
    @Autowired
    private ProductImageService productImageService;

    @GetMapping("/productImages{pid}")
    public String getProductById(@PathVariable("pid") int pid) throws JsonProcessingException {
        List<ProductImage> productImages = productImageService.getAllProduct(pid);
        String value = JacksonUtil.writeListAsJson(productImages);

        return value;
    }

}
