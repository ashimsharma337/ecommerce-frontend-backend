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
	public User createUser(User newUser) {
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
		return repo.findAll();
	}

	@Override
	public User updateUser(User updatedUser) {
		
		Long UserId = updatedUser.getId();
		
		Optional<User> optional = repo.findById(UserId);
		if(optional.isPresent()) {
			
			User existingUser = optional.get();
			
			existingUser.setUsername(updatedUser.getUsername());
			existingUser.setEmail(updatedUser.getEmail());
			existingUser.setPassword(updatedUser.getPassword());
			existingUser.setRole(updatedUser.getRole());
			
			return repo.save(existingUser); 
		} else {
			throw new UserNotFoundException("User with Id "+UserId+" not found");
		}
		
	}

	@Override
	public String deleteUserById(Long id) {
		Optional<User> optional = repo.findById(id);
		if(optional.isPresent()) {
			User userToBeDeleted = optional.get();
			repo.delete(userToBeDeleted);
			return "User with Id "+id+" deleted successfully!";
		} else {
			throw new UserNotFoundException("User with ID "+id+" not found!");
		}
	}

}
