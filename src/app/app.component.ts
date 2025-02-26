import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Car-Show-Room';

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
