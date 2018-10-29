package com.example.spring_boot_tmall.mapper;

import com.example.spring_boot_tmall.bean.Category;
import com.example.spring_boot_tmall.bean.Property;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PropertyMapper {

    List<Property> getPropertysByCid(int cid);
}
