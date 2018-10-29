package com.example.spring_boot_tmall.service;

import com.example.spring_boot_tmall.bean.Property;
import com.example.spring_boot_tmall.bean.PropertyValue;
import com.example.spring_boot_tmall.mapper.PropertyMapper;
import com.example.spring_boot_tmall.mapper.PropertyValueMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PropertyValueService {

    @Autowired
    private PropertyValueMapper propertyValueMapper;

    public PropertyValue getPropertyValueByPtid(int ptid, int pid) {
        return propertyValueMapper.getPropertyValueByPtidAndPid(ptid, pid);
    }


}
