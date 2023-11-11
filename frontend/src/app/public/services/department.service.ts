import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DepartmentI } from 'src/app/model/department.interface';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient) { }

  findOne(id: number): Observable<DepartmentI> {
    return this.http.get<DepartmentI>('api/departments/' + id);
  }

  find(): Observable<DepartmentI[]> {

    return this.http.get<DepartmentI[]>('api/departments');
  }

  create(obj: DepartmentI): Observable<DepartmentI> {
    return this.http.post<DepartmentI>('api/departments', obj);
  }

  updateOne(obj: DepartmentI) : Observable<DepartmentI> {
    return this.http.put<DepartmentI>('api/departments/'+ obj.id, obj);
  }
  
  deleteOne(id: number): Observable<DepartmentI> {
    return this.http.delete<DepartmentI>('api/departments/' + id);
  }

}