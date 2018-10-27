package com.example.spring_boot_tmall;

        import com.alibaba.druid.pool.DruidDataSource;
        import org.mybatis.spring.annotation.MapperScan;
        import org.springframework.boot.SpringApplication;
        import org.springframework.boot.autoconfigure.SpringBootApplication;
        import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
        import org.springframework.boot.context.properties.ConfigurationProperties;
        import org.springframework.context.annotation.Bean;
        import org.springframework.context.annotation.ComponentScan;
        import org.springframework.context.annotation.Configuration;
        import org.springframework.context.annotation.FilterType;
        import org.springframework.stereotype.Component;
        import org.springframework.stereotype.Controller;
        import org.springframework.stereotype.Repository;
        import org.springframework.stereotype.Service;

        import javax.sql.DataSource;

@SpringBootApplication()
@MapperScan("com.example.spring_boot_tmall.mapper")
    @ComponentScan(basePackages = {"com.example.spring_boot_tmall"},includeFilters = {
            @ComponentScan.Filter(type = FilterType.ANNOTATION,classes = {Service.class, Controller.class,
                    Repository.class, Component.class, Configuration.class})
    },useDefaultFilters = false)
public class SpringBootTmallApplication {

    public static void main(String[] args) {
        SpringApplication.run(SpringBootTmallApplication.class, args);
    }

    @Bean
    @ConfigurationProperties(prefix = "db")
    public DataSource dateSource() {
        DruidDataSource dataSource = new DruidDataSource();
        return dataSource;
    }
}
