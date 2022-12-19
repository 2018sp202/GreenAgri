import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
  

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  

  ngOnInit(): void {
  }
  images = [
    "https://cdn-5e9bdbc9f911c8155c5067b9.closte.com/wp-content/uploads/2017/04/vegatables-online-store.jpg",
   "https://media.istockphoto.com/photos/portrait-of-a-happy-young-farmer-holding-fresh-vegetables-in-a-basket-picture-id1221324878?k=20&m=1221324878&s=612x612&w=0&h=XItNrHplHobM496abV-0hfmZ-r3f3g0HXwHxedIxHvY= ",
    "https://i0.wp.com/post.greatist.com/wp-content/uploads/sites/2/2020/11/HEADERube-purple-yam-recipe-chowhound-670x448-1.jpg?w=1155&h=1526",
    "https://media.istockphoto.com/photos/agriculture-productsgrains-and-cereal-picture-id901218934"
  ];
  
  constructor(config: NgbCarouselConfig) {
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }
}