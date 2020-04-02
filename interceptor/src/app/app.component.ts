import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-examples';
  data$: Observable<any>;

  constructor(private http: HttpClient) {
    this.data$ = this.http.get('https://my-json-server.typicode.com/typicode/demo/posts');
    console.log(this.data$.toPromise().then(data => console.log(data)));
  }
}
