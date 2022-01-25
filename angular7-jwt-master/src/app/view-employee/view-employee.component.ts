import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Employee } from '../Employee';
import { HttpClientService } from '../service/httpclient.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {
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
      this.name=data.name;
      this.empId=data.id;
      this.mailId=data.mailId;
      this.salary=data.salary;
      this.dept=data.dept;
      this.dateOfBirth=data.dateOfBirth;
      this.address=data.address;

      
      
    }, error => console.log(error));
  }
  name="";
  empId ;
  mailId = "";
  salary = "";
  dept = "";
  dateOfBirth = "";
  address = ""


  
}
