import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TeacherCrudComponent } from "./teacher-crud/teacher-crud.component";
import { HttpClientModule } from '@angular/common/http';
import { TeacherService } from './teacher.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TeacherCrudComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})
export class AppComponent {
  title = 'Frontend';

}
