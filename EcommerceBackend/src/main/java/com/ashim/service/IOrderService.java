package com.ashim.service;

import java.util.List;

import com.ashim.entity.Order;

public interface IOrderService {

	Order createOrder(Order newOrder);
	Order getOrderById(Long id);
	List<Order> getAllOrders();
	Order updateOrder(Long id, Order orderDetails);
	String removeOrder(Long id);
}
