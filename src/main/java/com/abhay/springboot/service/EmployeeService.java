package com.abhay.springboot.service;

import java.util.List;

import com.abhay.springboot.model.Employee;

public interface EmployeeService {
	Employee saveEmployee(Employee employee);
	List<Employee> getAllEmployees();
	Employee getEmployeeById(long id);
	Employee updateEmployee(Employee employee, long id);
	void deleteEmployee(long id);

//	Employee saveMultipleEmployees(List<Employee> listOfEmployees);
}
