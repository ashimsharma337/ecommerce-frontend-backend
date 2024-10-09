package com.ashim.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ashim.entity.User;

public interface IUserRepository extends JpaRepository<User, Long>{

	User findByUsername(String username);
}
