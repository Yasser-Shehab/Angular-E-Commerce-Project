import { IPost } from './IPost';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http : HttpClient) { }
  _url:string ="https://jsonplaceholder.typicode.com/posts";
  getPosts():Observable<IPost[]>
  {
    return this.http.get<IPost[]>(this._url).pipe(catchError((err)=>
    {
      return throwError(()=>err.message || "An Error Occured")
    }))
  }
}
