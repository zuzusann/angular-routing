import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../Models/course';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  activeRoute: ActivatedRoute = inject(ActivatedRoute);
  course;
  router: Router = inject(Router);

  ngOnInit(){
    // static data
    // this.activeRoute.data.subscribe((data) => {
    //   this.course = data;
    // });

    this.course = history.state;
  }

}
