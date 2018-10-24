package com.example.spring_boot_tmall;

import org.junit.Test;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class TestConfig {

    @Test
    public void testSpringIOC() {
        AnnotationConfigApplicationContext applicationContext = new AnnotationConfigApplicationContext(SpringBootTmallApplication.class);
        String[] names = applicationContext.getBeanDefinitionNames();
        for (String s : names) {
            System.out.println("name===============>>" + s);
        }
    }
}
