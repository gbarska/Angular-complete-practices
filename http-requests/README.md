first add HttpClientModule to app.module.ts
imports: [HttpClientModule]

add the httpclient object through dependency injection
import { HttpClientModule } from '@angular/common/http';

constructor(private http: HttpClient) {}
