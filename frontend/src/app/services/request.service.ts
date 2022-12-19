import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }
  editBookingArray$ = new BehaviorSubject<any>({});
  getAllBooking()
  {
    return this.http.get('http://localhost:8000/api/book');
  }
  success(id:any){
    return this.http.get('http://localhost:8000/api/sucess'+id);
  }
  
 fail(){
  return this.http.get('http://localhost:8000/api/fail');

 }
 
 loan(data:any){
    return this.http.post('http://127.0.0.1:8000/api/loan',data);
  }

  complain(data:any){
    return this.http.post('http://127.0.0.1:8000/api/complain',data);
  }
  doubt(data:any){
    return this.http.post('http://127.0.0.1:8000/api/doubt',data);
  }
  getAllDoubt()
  {
    return this.http.get('http://localhost:8000/api/doubts');
  }
  relief(data:any){
    return this.http.post('http://127.0.0.1:8000/api/relief',data);
  }
  getAllRelief()
  {
    return this.http.get('http://localhost:8000/api/reliefs');
  }

}
