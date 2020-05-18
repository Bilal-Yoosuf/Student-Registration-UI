import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

 public students = [
    {name:'Joe', email:'joe@xyz.com', qualification:'B.tech'},
    {name:'Alex', email:'alex@xyz.com', qualification:'B.tech'},
    {name:'Jeeva', email:'jeeva@xyz.com', qualification:'B.tech'},
    {name:'Jenni', email:'jenni@xyz.com', qualification:'BCA'}

  ];

  constructor() { }

  public getStudents():Array<{name, email, qualification}>{
    return this.students;

  }
 
}
