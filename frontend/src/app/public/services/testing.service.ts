import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TestI } from 'src/app/model/test.interface';

@Injectable({
  providedIn: 'root'
})
export class TestingService {

  constructor(private http: HttpClient) { }

  findOne(id: number): Observable<TestI> {
    return this.http.get<TestI>('api/tests/' + id);
  }

  find(): Observable<TestI[]> {

    return this.http.get<TestI[]>('api/tests');
  }

  create(obj: TestI): Observable<TestI> {
    return this.http.post<TestI>('api/tests', obj);
  }

  updateOne(obj: TestI) : Observable<TestI> {
    return this.http.put<TestI>('api/tests/'+ obj.id, obj);
  }
  
  deleteOne(id: number): Observable<TestI> {
    return this.http.delete<TestI>('api/tests/' + id);
  }

}