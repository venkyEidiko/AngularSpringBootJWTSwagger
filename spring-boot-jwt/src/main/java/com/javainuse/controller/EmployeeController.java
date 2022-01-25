package com.javainuse.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.javainuse.model.EmployeeEntity;
import com.javainuse.service.EmployeeService;

import io.swagger.annotations.ApiOperation;

@CrossOrigin(origins = "http://localhost:4200")
@RestController()
@RequestMapping("/emp")
@ApiOperation(value = "Employee Crud Operation")
public class EmployeeController {
	@Autowired
	public EmployeeService employeeService;
	
	
	@PostMapping("/addEmployee")
	@ApiOperation(value = "Adding employee ")
	public EmployeeEntity addEmployee(@RequestBody EmployeeEntity entity) {
		return employeeService.saveEmployee(entity);
	}


	@GetMapping("/getEmployee/{id}")
	@ApiOperation(value = "Getting Employee by ID")
	public EmployeeEntity getEmployeeById(@PathVariable int id) {
		return employeeService.getEmployeeById(id);
	}

	@GetMapping("/getAllEmployess")
	@ApiOperation(value = "Getting all employee list")
	public List<EmployeeEntity> getAllEmployees() {
		return employeeService.getEmployees();

	}

	@GetMapping("/getEmployeeByName/{name}")
	@ApiOperation(value = "Getting Employee by Name")
	public EmployeeEntity getEmployeeByName(@PathVariable String name) {
		return employeeService.getEmployeeByName(name);
	}

	@DeleteMapping("/deleteEmployeeById/{id}")
	@ApiOperation(value = "Deleting employee by name")
	public String deleteEmployeeById(@PathVariable int id) {
		return employeeService.deleteById(id);
	}

	@PutMapping("/update")
	@ApiOperation(value = "Upadating Employee")
	public String updateById(@RequestBody EmployeeEntity empEntity) {
		
		return employeeService.updateEmployee(empEntity);

	}

}
