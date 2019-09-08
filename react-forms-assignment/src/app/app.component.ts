import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  myForm: FormGroup;

  ngOnInit(): void {
    this.myForm = new FormGroup({
      'projectName': new FormControl(null, [Validators.required],this.forbiddenNamesAsync),
      'mail': new FormControl(null, [Validators.required,Validators.email]),
      'projectStatus': new FormControl(null)
    })
  }

  onSubmit(){
    console.log(this.myForm);
    // this.myForm.reset();
  }


  forbiddenNames(control: FormControl): {[s: string]:boolean}{
    if(control.value === 'Test'){
      return {'nameIsForbidden': true};
    }
    return null;
  }

  forbiddenNamesAsync(control: FormControl): Promise<any> | Observable<any>{
    const promise = new Promise<any> ((resolve, reject) =>{
      setTimeout(() => {
        if(control.value === 'Test'){
          resolve({'nameIsForbidden': true});
        }
        else{
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }


}
