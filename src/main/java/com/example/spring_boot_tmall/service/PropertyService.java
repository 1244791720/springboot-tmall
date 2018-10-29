package com.example.spring_boot_tmall.service;

import com.example.spring_boot_tmall.bean.Category;
import com.example.spring_boot_tmall.bean.Property;
import com.example.spring_boot_tmall.mapper.CategoryMapper;
import com.example.spring_boot_tmall.mapper.PropertyMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PropertyService {

    @Autowired
    private PropertyMapper propertyMapper;

    public List<Property> getPropertysByCid(int cid) {
        return propertyMapper.getPropertysByCid(cid);
    }


}
