import { RouterModule } from '@angular/router';
import { HomeServiceService } from './../home-service.service';
import { Name } from './../home';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 myName:Name ={
   name:'Joe'
 }

  constructor(private homeservice:HomeServiceService) { }

  ngOnInit(): void {
  }

}
