import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  url: string = "https://localhost:7165/Home";
  constructor(public http:HttpClient) { }
  getTeachers(){
    return this.http.get(this.url);
  }
  deleteUser(id: number) {
    return this.http.delete(`${this.url}/deleteTeacher`, {body:{id}});
  }
  updateUser(teacher: any) {
    return this.http.put(`${this.url}/updateTeacher`, teacher);
  }
  addUser(teacher: any) {
    return this.http.post(`${this.url}/CreateTeacher`, teacher);
  }
}
