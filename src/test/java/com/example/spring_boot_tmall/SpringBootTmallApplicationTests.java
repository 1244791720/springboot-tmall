package com.example.spring_boot_tmall;

import com.example.spring_boot_tmall.bean.Product;
import com.example.spring_boot_tmall.service.ProductService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest
public class SpringBootTmallApplicationTests {

    @Autowired
    private ProductService productService;
    @Test
    public void contextLoads() {
        AnnotationConfigApplicationContext annotationConfigApplicationContext = new AnnotationConfigApplicationContext(SpringBootTmallApplication.class);
        String[] names = annotationConfigApplicationContext.getBeanDefinitionNames();
        for(String s : names) {
            System.out.println(s);
        }
    }

    @Test
    public void test() {
        List<Product> allProduct = productService.getAllProduct();
        System.out.println(allProduct);
    }

}
