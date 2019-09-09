import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export class AuthInterceptorService implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // alternatively we could bypass some requests depending on some criteria
        // if (req.url !== 'endpoint xyz')
        const modifiedRequest = req.clone({headers: req.headers.append('Auth','xyz')})
        return next.handle(modifiedRequest);
    }

}