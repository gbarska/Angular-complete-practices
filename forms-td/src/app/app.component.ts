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
  
  user = {
    username: '',
    email: '',
    reply: '',
    gender: '' 
  };

  submitted = false;

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
    this.submitted = true;
    this.user.username = this.myForm.value.userData.username; 
    this.user.email = this.myForm.value.userData.email; 
    this.user.gender = this.myForm.value.gender; 
    this.user.reply = this.myForm.value.reply; 
    console.log(this.myForm);

    this.myForm.reset();
    }



}
