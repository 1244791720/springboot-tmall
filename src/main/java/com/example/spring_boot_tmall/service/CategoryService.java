package com.example.spring_boot_tmall.service;

import com.example.spring_boot_tmall.bean.Category;
import com.example.spring_boot_tmall.mapper.CategoryMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {

    @Autowired
    private CategoryMapper cateGoryMapper ;

    public List<Category> getAllCategory() {
        return cateGoryMapper.getAllCategory();
    }


}
