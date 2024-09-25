package com.ashim.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ashim.entity.Product;

public interface IProductRepository extends JpaRepository<Product, Long>{

}
