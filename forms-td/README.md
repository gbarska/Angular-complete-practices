template driven forms angular


in this mode angular infeers the forms

mapping the inputs:

add the ngModel directive
<input type="text" ngModel>

add the identification for the inputs:
<input type="text" ngModel name="nameofthefield">

submiting the form, special event offered by angular:
<form (ngSubmit)="onSubmit()" >

getting the form reference:
<form (ngSubmit)="onSubmit(form)" #form>

accessing the javascript representation
<form (ngSubmit)="onSubmit(fo)" #fo="ngForm" >

built in validations derictives : required and email
<input
              type="email"
              id="email"
              class="form-control"
              ngModel
              name="email"
              required
              email>

styling 
input.ng-invalid.ng-touched,select.ng-invalid.ng-touched{
  border: 1px solid red;
}

<span *ngIf="!fo?.valid && fo.touched">Please check the values and try again</span>

default values, use property binding to output default values:
 [ngModel]="'pet'"