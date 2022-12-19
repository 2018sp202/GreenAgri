import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
export class User {
  name: String;
  email: String;
  password: String;
  
}

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http:HttpClient) { }
  signup(data:any){
    return this.http.post('http://127.0.0.1:8000/api/register',data);
  }
  login(data:any){
    return this.http.post('http://127.0.0.1:8000/api/login',data);
  }
  registerx(user: User): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/register', user);
  }
  getAllFarmers()
  {
    return this.http.get('http://localhost:8000/api/getfarmer');
  }
  getAllAo()
  {
    return this.http.get('http://localhost:8000/api/getao');
  }
  deleteData(id){
    return this.http.delete('http://localhost:8000/api/farmerdelete/'+id);
  
  }
  loan(data:any){
    return this.http.post('http://127.0.0.1:8000/api/loan',data);
  }
  farm(data:any){
    return this.http.post('http://127.0.0.1:8000/api/farm',data);
  }
  upload(data:any){
    return this.http.post('http://127.0.0.1:8000/api/uploadx',data);
  }
  uploadx(data:any){
    return this.http.post('http://127.0.0.1:8000/api/upload',data);
  }
  auction(data:any){
    return this.http.post('http://127.0.0.1:8000/api/auction',data);
  }
  getdate()
  {
    return this.http.get('http://localhost:8000/api/indexd');
  }
  getBid()
  {
    return this.http.get('http://localhost:8000/api/indexB');
  }
  getwinner()
  {
    return this.http.get('http://localhost:8000/api/winner');
  }
  bid(data:any){
    return this.http.post('http://127.0.0.1:8000/api/bid',data);
  }
  getVehicle(id: number) {
    return this.http.get('http://localhost:8000/api/auctionp/'+id);
  }
}
