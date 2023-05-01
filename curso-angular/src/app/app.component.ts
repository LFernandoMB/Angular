import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'Iheda';

  userData = {
    email: 'email@gmail.com',
    role: 'Admin',
  };

  title = 'curso-angular';
}
