import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.css']
})
export class EnfantComponent {
  @Input() message: string = ''; // Reçoit une valeur du parent
  @Output() messageEvent = new EventEmitter<string>(); // Émet un événement au parent

  sendMessage() {
    this.messageEvent.emit('Bonjour du composant enfant !');
  }
}
