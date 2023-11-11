import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AboutHrI } from 'src/app/model/about-hr.interface';

@Injectable({
  providedIn: 'root'
})
export class AboutHrService {

  constructor(private http: HttpClient) { }

  findOne(id: number): Observable<AboutHrI> {
    return this.http.get<AboutHrI>('api/about-hr/' + id);
  }

  find(): Observable<AboutHrI[]> {

    return this.http.get<AboutHrI[]>('api/about-hr');
  }

  create(obj: AboutHrI): Observable<AboutHrI> {
    return this.http.post<AboutHrI>('api/about-hr', obj);
  }

  updateOne(obj: AboutHrI) : Observable<AboutHrI> {
    return this.http.put<AboutHrI>('api/about-hr/'+ obj.id, obj);
  }
  
  deleteOne(id: number): Observable<AboutHrI> {
    return this.http.delete<AboutHrI>('api/about-hr/' + id);
  }

}