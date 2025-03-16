import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  parentMessage = 'Salut, je suis le parent.';
  childMessage = '';

  receiveMessage(message: string) {
    this.childMessage = message;
  }
}
