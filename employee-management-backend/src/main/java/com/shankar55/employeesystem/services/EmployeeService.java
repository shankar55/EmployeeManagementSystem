package com.shankar55.employeesystem.services;

import com.shankar55.employeesystem.model.Employee;

import java.util.List;

public interface EmployeeService {
    public Employee createEmployee(Employee employee);

    public List<Employee> getAllEmployees();

    public boolean deleteEmployee(Long id);

    public Employee getEmployeeById(Long id);

    public Employee updateEmployee(Long id, Employee employee);
}
