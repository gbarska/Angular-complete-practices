# TestApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## Tips Routes

//imports
import { Routes } from '@angular/router';

 //criar as rotas da aplicacao
const appRoutes: Routes = [
  {path: '', component: AppComponent}
]

//adicionar  o RouterModule no imports do modulo
imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],

RouterLink 

<!-- relative path: appends the route to the current path <a routerLink="servers"></a> -->
   
<!-- absolute path: appends the route to the root / path
<a routerLink="/servers"></a> -->

<!-- ../ path: <a routerLink="../servers"></a> -->

//adding activated route  and the router to navigate programmaticaly

constructor(
     private router: Router,
     private route: ActivatedRoute)

//navigating to relative path programatically, with  relativeTO
  onReload(){
  this.router.navigate(['/servers', {relativeTo: this.route}]);
  }

//when the route for the current component is called inside the component
//it is necessary to subscribe to the route object
//in order to catch the changes and refresh data displayed

this.route.params
            .subscribe(
              (params: Params) =>{
                this.user.id = params['id'];
                this.user.name = params['name'];
              }
            );