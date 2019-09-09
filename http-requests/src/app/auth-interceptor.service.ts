import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

export class AuthInterceptorService implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // alternatively we could bypass some requests depending on some criteria
        // if (req.url !== 'endpoint xyz')

        const modifiedRequest = req.clone({headers: req.headers.append('Auth','xyz')})
        console.log('request is on its way');
        return next.handle(modifiedRequest);
    }

}