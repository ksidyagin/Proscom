import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProgramI } from 'src/app/model/program.interface';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  constructor(private http: HttpClient) { }

  findOne(id: number): Observable<ProgramI> {
    return this.http.get<ProgramI>('api/programs/' + id);
  }

  find(): Observable<ProgramI[]> {

    return this.http.get<ProgramI[]>('api/programs');
  }

  create(obj: ProgramI): Observable<ProgramI> {
    return this.http.post<ProgramI>('api/programs', obj);
  }

  updateOne(obj: ProgramI) : Observable<ProgramI> {
    return this.http.put<ProgramI>('api/programs/'+ obj.id, obj);
  }
  
  deleteOne(id: number): Observable<ProgramI> {
    return this.http.delete<ProgramI>('api/programs/' + id);
  }

}