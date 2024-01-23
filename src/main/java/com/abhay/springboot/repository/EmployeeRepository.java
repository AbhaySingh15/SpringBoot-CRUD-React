package com.abhay.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.abhay.springboot.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long>{

}
