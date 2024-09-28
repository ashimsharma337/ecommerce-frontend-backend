package com.ashim.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ashim.entity.Order;

public interface IOrderRepository extends JpaRepository<Order, Long>{

}
