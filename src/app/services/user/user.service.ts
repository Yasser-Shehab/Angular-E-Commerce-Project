import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { IUser } from './IUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }
  _url:string ="https://jsonplaceholder.typicode.com/users";
  getUsers():Observable<IUser[]>
  {
    return this.http.get<IUser[]>(this._url).pipe(catchError((err)=>
    {
      return throwError(()=>err.message || "An Error Occured")
    }))
  }
}
