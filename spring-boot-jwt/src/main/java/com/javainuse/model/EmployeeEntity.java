package com.javainuse.model;

import javax.persistence.Entity;
import javax.persistence.Id;

import io.swagger.annotations.ApiModelProperty;

@Entity
public class EmployeeEntity {
	
	@Id
	@ApiModelProperty(value = "Employee Entity Id as primary Key")
	private int id;
	private String name;
	private String mailId;
	private String dept;
	private double salary;
	private String dateOfBirth;
	private String address;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getMailId() {
		return mailId;
	}
	public void setMailId(String mailId) {
		this.mailId = mailId;
	}
	public String getDept() {
		return dept;
	}
	public void setDept(String dept) {
		this.dept = dept;
	}
	public double getSalary() {
		return salary;
	}
	public void setSalary(double salary) {
		this.salary = salary;
	}
	public String getDateOfBirth() {
		return dateOfBirth;
	}
	public void setDateOfBirth(String dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	@Override
	public String toString() {
		return "EmployeeEntity [id=" + id + ", name=" + name + ", mailId=" + mailId + ", dept=" + dept + ", salary="
				+ salary + ", dateOfBirth=" + dateOfBirth + ", address=" + address + "]";
	}
	public EmployeeEntity() {
		super();
	}
	
	

}
