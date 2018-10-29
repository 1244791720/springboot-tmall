package com.example.spring_boot_tmall.bean;

public class Property {
    private int id;
    private int cid;
    private String name;

    public Property(int id, int cid, String name) {
        this.id = id;
        this.cid = cid;
        this.name = name;
    }

    public Property() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getCid() {
        return cid;
    }

    public void setCid(int cid) {
        this.cid = cid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "Property{" +
                "id=" + id +
                ", cid=" + cid +
                ", name='" + name + '\'' +
                '}';
    }
}
