import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export class LoggingInterceptorService implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('Outgoing request...')
        
   return next.handle(req)
        //intercepting the response
        .pipe(tap(event => {
            if(event.type === HttpEventType.Response){
                console.log(' Incoming Response...');
                console.log(event.body);
            }
        }));
    }

}