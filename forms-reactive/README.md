the reactive approach 

import the required module
ReactiveFormsModule

creating the form wrapper:
signupForm: FormGroup;

implementing the form:

 ngOnInit(): void {
    this.signupForm = new FormGroup({
      
    });
  }

adding controls and validators
  this.signupForm = new FormGroup({
        'username': new FormControl(null, Validators.required),
        'email':new FormControl(null, [Validators.required,Validators.email]),
      'gender':new FormControl('male')
    });

getting access to control's values
 <span *ngIf="!signupForm.get('username').valid && signupForm.get('username').touched ">Please enter a valid username!</span>

adding formGroups
ngOnInit(): void {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, Validators.required),
        'email':new FormControl(null, [Validators.required,Validators.email])
      })
     ,
      'gender':new FormControl('male')
    });
  }
