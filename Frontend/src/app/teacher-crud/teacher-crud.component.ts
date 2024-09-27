import { Component } from '@angular/core';
import { TeacherService } from '../teacher.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-teacher-crud',
  standalone: true,
  imports: [HttpClientModule, CommonModule, FormsModule],
  templateUrl: './teacher-crud.component.html',
  styleUrl: './teacher-crud.component.css',
  providers: [TeacherService]
})
export class TeacherCrudComponent {
  teachers: any = []
  newTeacher: any = {
    name: '',
    email: '',
    password: ''
  }
  selectedTeacher = {
    name: '',
    email: '',
    password: ''
  };
  constructor(public ss: TeacherService) { }

  ngOnInit() {
    this.ss.getTeachers().subscribe(data => { this.teachers = data; console.log(data) });
  }
  addTeacher() {
    this.ss.addUser(this.newTeacher).subscribe(data => {
      console.log(data);
      this.ngOnInit();
      this.newTeacher.name = '';
      this.newTeacher.email = '';
      this.newTeacher.password = '';
    })
  }
  setSelected(teacher: any) {
    this.selectedTeacher = teacher;
  }
  editTeacher() {
    this.ss.updateUser(this.selectedTeacher).subscribe(data => {
      console.log(data);
      this.ngOnInit();
      this.selectedTeacher.name = '';
      this.selectedTeacher.email = '';
      this.selectedTeacher.password = '';
    })
  }
  DeleteTeacher(id: number) {
    this.ss.deleteUser(id).subscribe(data => {
      console.log(data);
      this.ngOnInit();
    })
  }

}
