package com.ashim.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ashim.dao.IUserRepository;
import com.ashim.entity.User;
import com.ashim.exceptions.UserNotFoundException;

@Service
public class UserServiceImpl implements IUserService {
    
	private final IUserRepository repo;
	
	@Autowired
	public UserServiceImpl(IUserRepository repo) {
		this.repo = repo;
	}
	
	@Override
	public User createProduct(User newUser) {
		return repo.save(newUser);
	}

	@Override
	public User getUserById(Long id) {
		Optional<User> optional = repo.findById(id);
		if(optional.isPresent()) {
			return optional.get();
		} else {
			return  optional.orElseThrow(() -> new UserNotFoundException("User with id "+id+" not found!"));
		}
	}

	@Override
	public List<User> getAllUsers() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public User updateUser(User updatedUser) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String deleteUserById(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

}
