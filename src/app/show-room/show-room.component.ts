import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-room',
  standalone: true,
  imports: [],
  templateUrl: './show-room.component.html',
  styleUrl: './show-room.component.css'
})
export class ShowRoomComponent implements OnInit{

  
  car = { 
    brand:'',
    model:'',
    bodyType:'',
    engineSpec:'',
    lunch:0.0,
    topSpeed:0.0,
    price:0.0,
    modelYear:0,
    imgUrl:''
  }
  carTable: any[] = [];
  
  constructor()
  {}

  ngOnInit(): void {
      
  }
}
