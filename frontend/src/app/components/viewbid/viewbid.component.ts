import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
@Component({
  selector: 'app-viewbid',
  templateUrl: './viewbid.component.html',
  styleUrls: ['./viewbid.component.css']
})
export class ViewbidComponent implements OnInit {

  constructor(private backend:BackendService) { }
  winner:any;
  p:any;
    ngOnInit(): void {
      this.getWinner()
    }
    getWinner(){
      const user = JSON.parse(localStorage.getItem('user'));
      this.backend.getwinner().subscribe(res=>{
      this.winner=res;
      this.winner = this.winner.filter(pd=>{
        return pd.farmer_id == user.id
      })
      console.log(this.winner);
    
      })
    }
  }
  


