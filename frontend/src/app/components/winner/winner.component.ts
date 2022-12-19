import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
@Component({
  selector: 'app-winner',
  templateUrl: './winner.component.html',
  styleUrls: ['./winner.component.css']
})
export class WinnerComponent implements OnInit {

  constructor(private backend:BackendService) { }
winner:any;
  ngOnInit(): void {
    this.getWinner()
  }
  getWinner(){
    const user = JSON.parse(localStorage.getItem('user'));
    this.backend.getwinner().subscribe(res=>{
    this.winner=res;
    this.winner = this.winner.filter(pd=>{
      return pd.buyer_id == user.id
    })
    console.log(this.winner);
  
    })
  }
}
