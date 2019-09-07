import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('fo') myForm: NgForm;
  resposta = "";  
  genders = ['male','female'];

  suggestUserName() {
    const suggestedName = 'Superuser';

    // not the best approach it overrides the all previous data, set the whole form
    // this.myForm.setValue({
    //   userData:{
    //     username: suggestedName,
    //     email:'',
       
    //   },
    //   gender: 'male',
    //   secret: 'pet', 
    //   reply:''
    // })

    //better approach override only specific fields
    this.myForm.form.patchValue({
      userData:{
        username: suggestedName
      }
    })
  }

  // onSubmit(form: NgForm){
  //   console.log(form);
  // }

  // accessing the form with viewchild
  onSubmit(form: NgForm){
      console.log(this.myForm);
    }
}
