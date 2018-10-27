package com.example.spring_boot_tmall.mapper;

import com.example.spring_boot_tmall.bean.Category;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategoryMapper {

    List<Category> getAllCategory();
}
