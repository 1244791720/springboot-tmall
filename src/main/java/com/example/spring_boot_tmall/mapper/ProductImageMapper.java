package com.example.spring_boot_tmall.mapper;

import com.example.spring_boot_tmall.bean.ProductImage;

import java.util.List;

public interface ProductImageMapper {
    List<ProductImage> getProductImgsByPid(int pid);
}
