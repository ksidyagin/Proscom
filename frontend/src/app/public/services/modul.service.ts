import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModulI } from 'src/app/model/modul.interface';

@Injectable({
  providedIn: 'root'
})
export class ModulService {

  constructor(private http: HttpClient) { }

  findOne(id: number): Observable<ModulI> {
    return this.http.get<ModulI>('api/moduls/' + id);
  }

  find(): Observable<ModulI[]> {

    return this.http.get<ModulI[]>('api/moduls');
  }

  create(obj: ModulI): Observable<ModulI> {
    return this.http.post<ModulI>('api/moduls', obj);
  }

  updateOne(obj: ModulI) : Observable<ModulI> {
    return this.http.put<ModulI>('api/moduls/'+ obj.id, obj);
  }
  
  deleteOne(id: number): Observable<ModulI> {
    return this.http.delete<ModulI>('api/moduls/' + id);
  }

}