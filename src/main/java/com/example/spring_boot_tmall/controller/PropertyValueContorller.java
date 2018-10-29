package com.example.spring_boot_tmall.controller;

import com.example.spring_boot_tmall.bean.Property;
import com.example.spring_boot_tmall.bean.PropertyValue;
import com.example.spring_boot_tmall.service.PropertyService;
import com.example.spring_boot_tmall.service.PropertyValueService;
import com.example.spring_boot_tmall.util.JacksonUtil;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PropertyValueContorller {
    @Autowired
    private PropertyValueService propertyValueService;

    @GetMapping("/propertyValue{ptid}&{pid}")
    public String getProductById(@PathVariable("ptid") int ptid, @PathVariable("pid") int pid) throws JsonProcessingException {
        PropertyValue propertyValue = propertyValueService.getPropertyValueByPtid(ptid, pid);
        String value = JacksonUtil.writeObjectAsJson(propertyValue);
        return value;
    }

}
