package com.example.spring_boot_tmall.controller;

import com.example.spring_boot_tmall.bean.Category;
import com.example.spring_boot_tmall.service.CategoryService;
import com.example.spring_boot_tmall.util.JacksonUtil;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 *  返回数据的控制器类
 */
@RestController
//@Controller
public class CategoryContorller {
    @Autowired
    private CategoryService categoryService;

    @GetMapping("/category")
    public  String getAllCategory() throws JsonProcessingException {
        List<Category> allCategory = categoryService.getAllCategory();

        String listAsJson = JacksonUtil.writeListAsJson(allCategory);

        return listAsJson;
    }

}
