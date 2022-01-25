package com.javainuse.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.javainuse.model.EmployeeEntity;

public interface EmplooyeRepo extends JpaRepository<EmployeeEntity, Integer> {
	EmployeeEntity findByName(String name);

}
