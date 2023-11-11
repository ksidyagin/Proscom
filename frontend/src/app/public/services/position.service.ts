import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DepartmentI } from 'src/app/model/department.interface';
import { PositionI } from 'src/app/model/position.interface';

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  constructor(private http: HttpClient) { }

  findOne(id: number): Observable<PositionI> {
    return this.http.get<PositionI>('api/positions/' + id);
  }

  find(): Observable<PositionI[]> {

    return this.http.get<PositionI[]>('api/positions');
  }

  create(obj: PositionI): Observable<PositionI> {
    return this.http.post<PositionI>('api/positions', obj);
  }

  updateOne(obj: PositionI) : Observable<PositionI> {
    return this.http.put<PositionI>('api/positions/'+ obj.id, obj);
  }
  
  deleteOne(id: number): Observable<PositionI> {
    return this.http.delete<PositionI>('api/positions/' + id);
  }

}