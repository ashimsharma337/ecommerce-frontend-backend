package com.ashim.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ashim.entity.Cart;

public interface ICartRepository extends JpaRepository<Cart, Long>{

	List<Cart> findByUserId(Long userId);
}
