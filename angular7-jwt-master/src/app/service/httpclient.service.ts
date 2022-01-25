import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../Employee';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getEmployees() {

    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .append('Authorization', sessionStorage.getItem('token'));

    return this.httpClient.get<Employee[]>(`http://localhost:1010/emp/getAllEmployess`, { headers });
  }

  public deleteEmployee(id:number) {

    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .append('Authorization', sessionStorage.getItem('token'));

    return this.httpClient.delete<Employee>(`http://localhost:1010/emp/deleteEmployeeById/${id} `, { headers });
  }

  public createEmployee(employee) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .append('Authorization', sessionStorage.getItem('token'));
    return this.httpClient.post<Employee>("http://localhost:1010/emp/addEmployee", employee, { headers });
  }
  public updateEmployee(employee: Employee): Observable<Object> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .append('Authorization', sessionStorage.getItem('token'));
    return this.httpClient.put(`http://localhost:1010/emp/update`, employee, { headers });
  }


  public getEmployeeById(id: number): Observable<Employee> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .append('Authorization', sessionStorage.getItem('token'));
    return this.httpClient.get<Employee>(`http://localhost:1010/emp/getEmployee/${id}`, { headers });
  }


}