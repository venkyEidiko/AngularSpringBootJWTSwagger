package com.javainuse.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.javainuse.model.EmployeeEntity;
import com.javainuse.repo.EmplooyeRepo;

@Service
public class EmployeeService {
	@Autowired
	public EmplooyeRepo repository;
	
	public EmployeeEntity saveEmployee(EmployeeEntity employeeEntity) {
		return repository.save(employeeEntity);
	}


	public List<EmployeeEntity> getEmployees() {
		return repository.findAll();
	}

	public EmployeeEntity getEmployeeById(int id) {
		return repository.findById(id).orElse(null);
	}

	public EmployeeEntity getEmployeeByName(String name) {
		return repository.findByName(name);
	}

	public String deleteById(int id) {
		repository.deleteById(id);
		return "Employee " + id + " has deleted successfully";
	}

	public String updateEmployee(EmployeeEntity employeeEntity) {
		EmployeeEntity exestingRecord = repository.findById(employeeEntity.getId()).orElse(null);
		if(exestingRecord != null) {
		exestingRecord.setName(employeeEntity.getName());
		exestingRecord.setMailId(employeeEntity.getMailId());
		exestingRecord.setDept(employeeEntity.getDept());
		exestingRecord.setDateOfBirth(employeeEntity.getDateOfBirth());
		exestingRecord.setAddress(employeeEntity.getAddress());
		exestingRecord.setSalary(employeeEntity.getSalary());

		 repository.save(exestingRecord);
		 
		 return "Data has updated successfully";

	}
		return "Data has not updated";
	

	}

}
