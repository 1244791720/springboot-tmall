package com.example.spring_boot_tmall.controller;

import com.example.spring_boot_tmall.bean.Product;
import com.example.spring_boot_tmall.bean.Property;
import com.example.spring_boot_tmall.service.ProductService;
import com.example.spring_boot_tmall.service.PropertyService;
import com.example.spring_boot_tmall.util.JacksonUtil;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PropertyContorller {
    @Autowired
    private PropertyService propertyService;

    @GetMapping("/propertys{cid}")
    public String getProductById(@PathVariable("cid") int cid) throws JsonProcessingException {
        List<Property> propertys = propertyService.getPropertysByCid(cid);
        String value = JacksonUtil.writeListAsJson(propertys);

        return value;
    }

}
