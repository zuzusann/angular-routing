import { Component } from '@angular/core';
import { IDeactivateComponent } from '../Services/authguard.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements IDeactivateComponent  {

  firstname: string = '';
  lastname: string = '';
  country: string = 'usa';
  message: string = '';

  isSubmitted: boolean = false;

  onSubmit(){
    this.isSubmitted = true;
  }

  canExit(){
    if((this.firstname || this.lastname || this.message) && !this.isSubmitted){
      return confirm('YOu have unsaved changed. Do you want to navigate away?')
    }else{
      return true;
    }
  }

}
