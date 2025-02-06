import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @ViewChild('username') username: ElementRef;
  @ViewChild('password') password: ElementRef;

  authServic: AuthService = inject(AuthService);
  router: Router = inject(Router);
  activeRoute: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(){
    this.activeRoute.queryParamMap.subscribe((queries) => {
      const logout = Boolean(queries.get('logout')) ;

      if(logout){
        this.authServic.logout;
        alert('You are now logout. IsLogged = ' + this.authServic.isLogged);
      }
    })
  }

  OnLoginClick(){
    const username = this.username.nativeElement.value;
    const password = this.password.nativeElement.value;

    const user = this.authServic.login(username, password);

    if(user === undefined){
      alert('The login cedentials you have entered is not correct.');
    
    }else{
      alert('Welcome ' + user.name + '. You are logged in.')
      this.router.navigate(['\Courses']);
    }
  }

}
