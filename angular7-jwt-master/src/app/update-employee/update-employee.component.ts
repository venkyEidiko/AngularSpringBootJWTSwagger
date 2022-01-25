import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Employee } from '../Employee';
import { HttpClientService } from '../service/httpclient.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  id: number;
  employee: Employee = new Employee();

  constructor(
    private httpClientService:HttpClientService,
    private router: Router,
    private route : ActivatedRoute

  ) { }
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.httpClientService.getEmployeeById(this.id).subscribe(data => {
      console.log("getting data by id"+data);
      
      this.employee = data;
    }, error => console.log(error));
  }

  updateEmployee(){
    // this.httpClientService.createEmployee(this.employee)
    // .subscribe( data => {
    //   console.log(data);
      
    //   alert("Employee created successfully.");
    //   this.goToEmployeeList();
    // },
    // error=>{
    //   console.log("error at saving "+ error);
      
    // });
    this.httpClientService.updateEmployee( this.employee).subscribe( data =>{
      console.log("update data "+ data);
      alert("Employee Data ha updated successfully");
      this.goToEmployeeList();
    }
    , error => console.log(error));

  }

  onSubmit(){
   this.updateEmployee();
  }

  goToEmployeeList(){
    this.router.navigate(['']);
  }

  

}
