package com.ashim.service;

import java.util.List;

import com.ashim.entity.User;


public interface IUserService {

	User createProduct(User newUser);
	User getUserById(Long id);
	List<User> getAllUsers();
    User updateUser(User updatedUser);
    String deleteUserById(Long id);
}
