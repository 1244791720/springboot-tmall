package com.example.spring_boot_tmall.util;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.util.List;

public class JacksonUtil {

    public static String writeListAsJson(List list) throws JsonProcessingException {
        ObjectMapper mapper = new ObjectMapper();
        String value = mapper.writeValueAsString(list);

        return  value;
    }

    public static String writeObjectAsJson(Object object) throws JsonProcessingException {
        ObjectMapper mapper = new ObjectMapper();
        String value = mapper.writeValueAsString(object);

        return value;
    }
}
