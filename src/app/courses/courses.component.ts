import { Component, inject, OnInit } from '@angular/core';
import { Course } from '../Models/course';
import { CourseService } from '../Services/course.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit{
  
  constructor(private courseService: CourseService, private route: ActivatedRoute){}

  courses = [];

  ngOnInit(): void {
      this.courses = this.route.snapshot.data['courses'];
  }

  
}
