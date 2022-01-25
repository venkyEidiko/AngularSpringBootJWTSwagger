import { Component, OnInit } from '@angular/core';
import { Employee } from '../Employee';
import { HttpClientService } from '../service/httpclient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employee: Employee = new Employee();

  constructor(
    private httpClientService: HttpClientService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  createEmployee(): void {
    this.httpClientService.createEmployee(this.employee)
        .subscribe( data => {
          console.log(data);
          
          alert("Employee created successfully.");
          this.goToEmployeeList();
        },
        error=>{
          console.log("error at saving "+ error);
          
        });
      

  };

  goToEmployeeList(){
    this.router.navigate(['']);
  }
  
  onSubmit(){
    console.log("create record"+ this.employee);
    this.createEmployee();
    
  }

}