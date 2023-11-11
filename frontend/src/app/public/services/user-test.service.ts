import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TestI } from 'src/app/model/test.interface';
import { UserTestI } from 'src/app/model/user-test.interface';

@Injectable({
  providedIn: 'root'
})
export class UserTestService {

  constructor(private http: HttpClient) { }

  findOne(id: number): Observable<UserTestI[]> {
    return this.http.get<UserTestI[]>('api/user-test/' + id);
  }

  find(): Observable<UserTestI[]> {

    return this.http.get<UserTestI[]>('api/user-test');
  }

  create(obj: UserTestI): Observable<UserTestI> {
    return this.http.post<UserTestI>('api/user-test', obj);
  }

  updateOne(obj: UserTestI) : Observable<UserTestI> {
    return this.http.put<UserTestI>('api/user-test/'+ obj.id, obj);
  }
  
  deleteOne(id: number): Observable<UserTestI> {
    return this.http.delete<UserTestI>('api/user-test/' + id);
  }

}