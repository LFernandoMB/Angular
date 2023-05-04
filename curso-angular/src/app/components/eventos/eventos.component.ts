import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent {
  show = true;

  showMessage(): void{
    this.show = !this.show; // Toggle (Troca de Estado)
  }
}
