import { inject } from "@angular/core"
import { AuthService } from "./Services/auth.service"
import { Router } from "@angular/router";
import { CourseService } from "./Services/course.service";


export const canActivate = () => {
    const authService = inject(AuthService);
    const router = inject(Router);

    if(authService.isAuthenticated()){
        return true;
    }else{
        router.navigate(['/Login']);
        return false;
    }
}

export const canActivateChild = () => {
    return canActivate();
}

export const resolve = () => {
   const courseService = inject(CourseService);
   return courseService.getAllcourses();
}