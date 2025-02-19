import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { CourseService } from "./Services/course.service";
import { Injectable } from "@angular/core";

@Injectable()
export class CourseResolveService implements Resolve<any>{

    constructor(private courseService: CourseService){

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.courseService.getAllcourses().then((data) => {
            return data;
        });
    }

}