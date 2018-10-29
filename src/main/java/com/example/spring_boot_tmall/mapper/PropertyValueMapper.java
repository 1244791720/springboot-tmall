package com.example.spring_boot_tmall.mapper;

import com.example.spring_boot_tmall.bean.Property;
import com.example.spring_boot_tmall.bean.PropertyValue;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PropertyValueMapper {

    PropertyValue getPropertyValueByPtidAndPid(@Param("ptid") int ptid, @Param("pid") int pid);
}
