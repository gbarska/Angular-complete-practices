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
