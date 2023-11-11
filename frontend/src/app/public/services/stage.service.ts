import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StageI } from 'src/app/model/stage.interface';

@Injectable({
  providedIn: 'root'
})
export class StageService {

  constructor(private http: HttpClient) { }

  findOne(id: number): Observable<StageI> {
    return this.http.get<StageI>('api/stages/' + id);
  }

  findByProgram(id: number): Observable<StageI[]> {
    return this.http.get<StageI[]>('api/stages/by-program/' + id);
  }

  find(): Observable<StageI[]> {

    return this.http.get<StageI[]>('api/stages');
  }

  create(obj: StageI): Observable<StageI> {
    return this.http.post<StageI>('api/stages', obj);
  }

  updateOne(obj: StageI) : Observable<StageI> {
    return this.http.put<StageI>('api/stages/'+ obj.id, obj);
  }
  
  deleteOne(id: number): Observable<StageI> {
    return this.http.delete<StageI>('api/stages/' + id);
  }

}