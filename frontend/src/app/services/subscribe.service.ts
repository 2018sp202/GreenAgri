import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SubscribeService {
  editChairArray$ = new BehaviorSubject<any>({});
  constructor(private http: HttpClient) { }
  getAllSubscribe() {
    return this.http.get('http://localhost:8000/api/subscribe');
  }
  
  deleteData(id){
    return this.http.delete('http://localhost:8000/api/subscribex/'+id);
  
  }
  deleteFarm(id){
    return this.http.delete('http://localhost:8000/api/delfarm/'+id);
  
  }
  getAllComplain() {
    return this.http.get('http://localhost:8000/api/show');
  }
  getAllLoan() {
    return this.http.get('http://localhost:8000/api/loans');
  }
  getAllRelief() {
    return this.http.get('http://localhost:8000/api/reliefs');
  }
  getAllRequest() {
    return this.http.get('http://localhost:8000/api/doubts');
  }
  getAllProduct() {
    return this.http.get('http://localhost:8000/api/indexp');
  }
  getExpiredProduct() {
    return this.http.get('http://localhost:8000/api/expiredp');
  }
  getAllB() {
    return this.http.get('http://localhost:8000/api/indexB');
  }
  getAllFarm() {
    return this.http.get('http://localhost:8000/api/indexF');
  }
  
 
  
  deleteComplain(id){
    return this.http.delete('http://localhost:8000/api/subscribe/'+id);
  
  }
  deleteProduct(id){
    return this.http.delete('http://localhost:8000/api/delproduct/'+id);
  
  }
  successr(id:any){
    return this.http.get('http://localhost:8000/api/successr/'+id);
  }
  failr(id:any){
    return this.http.get('http://localhost:8000/api/failr/'+id);
  }
  deleterelief(id){
    return this.http.delete('http://localhost:8000/api/delrelief/'+id);
  
  }
  successcom(id:any){
    return this.http.get('http://localhost:8000/api/successcom/'+id);
  }
  success(id:any){
    return this.http.get('http://localhost:8000/api/successlo/'+id);
  }
  fail(id:any){
    return this.http.get('http://localhost:8000/api/faillo/'+id);
  }
  deleteLoan(id){
    return this.http.delete('http://localhost:8000/api/loande/'+id);
  
  }
  successd(id:any){
    return this.http.get('http://localhost:8000/api/successd/'+id);
  }
  faild(id:any){
    return this.http.get('http://localhost:8000/api/faild/'+id);
  }
  deleterequest(id){
    return this.http.delete('http://localhost:8000/api/deldoubt/'+id);
  
  }
  setEditChairArray(data)
  {
    this.editChairArray$.next(data);
  }
}
