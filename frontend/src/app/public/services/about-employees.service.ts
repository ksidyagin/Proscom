import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AboutEmployeeI } from 'src/app/model/about-employee.interface';

@Injectable({
  providedIn: 'root'
})
export class AboutEmployeeService {

  constructor(private http: HttpClient) { }

  findOne(id: number): Observable<AboutEmployeeI> {
    return this.http.get<AboutEmployeeI>('api/about-employee/' + id);
  }

  find(): Observable<AboutEmployeeI[]> {

    return this.http.get<AboutEmployeeI[]>('api/about-employee');
  }

  create(obj: AboutEmployeeI): Observable<AboutEmployeeI> {
    return this.http.post<AboutEmployeeI>('api/about-employee', obj);
  }

  updateOne(obj: AboutEmployeeI) : Observable<AboutEmployeeI> {
    return this.http.put<AboutEmployeeI>('api/about-employee/'+ obj.id, obj);
  }
  
  deleteOne(id: number): Observable<AboutEmployeeI> {
    return this.http.delete<AboutEmployeeI>('api/about-employee/' + id);
  }

}