import { HomeServiceService } from './../home-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students;
  id:number = 1;
  
  constructor(public homeservice:HomeServiceService) { 
   this.students = homeservice.students;
  }

  ngOnInit(): void {
  }
 

}
