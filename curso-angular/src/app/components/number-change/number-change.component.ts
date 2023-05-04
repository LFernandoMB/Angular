import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-number-change',
  templateUrl: './number-change.component.html',
  styleUrls: ['./number-change.component.css']
})
export class NumberChangeComponent {
  @Output() changeNumber: EventEmitter<any> = new EventEmitter();

  handleClick(){
    this.changeNumber.emit();
  }

}
