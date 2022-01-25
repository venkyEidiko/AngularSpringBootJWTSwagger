import { Component, OnInit } from '@angular/core';
import { Employee } from '../Employee';
import { HttpClientService } from '../service/httpclient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: Employee[];







  constructor(
    private httpClientService: HttpClientService,
    private router: Router
  ) { }

  ngOnInit() {
    this.httpClientService.getEmployees().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
    console.log("heelo" + this.employees);

  }

  handleSuccessfulResponse(response) {
    this.employees = response;
    console.log("result" + this.employees);

  }

  private getEmployees() {
    this.httpClientService.getEmployees().subscribe(data => {


      this.employees = data;
    });
  }
  deleteMethod(id: number) {


    this.httpClientService.deleteEmployee(id).subscribe(data => {
      console.log("deleted" + data);


    })



  }
  deleteEmployee(id: number) {

    this.deleteMethod(id);
    alert(`your record has deleted permentetly`)
    this.getEmployees();


  }
  employeeDetails(id: number) {
    this.router.navigate(['view', id]);
  }

  updateEmployee(id: number) {
    this.router.navigate(['update', id]);
  }



}