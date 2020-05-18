import { Router } from '@angular/router';
import { HomeServiceService } from './../home-service.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.css'],
})
export class EnrollComponent implements OnInit {
  addNew(): any {
    const obj = {
      name: this.name,
      email: this.email,
      qualification: this.qualification,
    };
    console.log('working');
    this.students.push(obj);
    console.log(this.students);
    this.route.navigateByUrl('/students');
  }

  students;
  name;
  email;
  qualification;

  constructor(public homeservice: HomeServiceService, private route: Router) {
    this.students = homeservice.students;
  }

  ngOnInit(): void {}
}
