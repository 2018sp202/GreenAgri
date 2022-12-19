import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  editChairArray$ = new BehaviorSubject<any>({});
  constructor(private http : HttpClient) { }
  getProduct(){
    return this.http.get<any>("http://localhost:8000/api/indexA")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  getExpiredA(){
    return this.http.get<any>("http://localhost:8000/api/expiredA")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  setEditChairArray(data)
  {
    this.editChairArray$.next(data);
  }
  getp(id){
    return this.http.get('http://localhost:8000/api/auctionp/'+id);
  
  }
  deleteData(id){
    return this.http.delete('http://localhost:8000/api/delauction/'+id);
 
  }
}
