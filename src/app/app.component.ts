import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  form!: FormGroup;


  constructor(private modalService: NgbModal, private fb: FormBuilder) {
    
  }

  public open(modal: any): void {
    this.modalService.open(modal);
  }

  title = '4 ARCTIC 10';
  x: string = "";
  nb: number = 0;
  y = false;
  search: string = "";

  getNb(): number {
    return this.nb + 1337;
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: [
        '',
        [Validators.required, Validators.pattern('^[a-zA-Z0-9]+$')]
      ]
    });
    console.log('AppComponent initialized');
  }

  fillX(y: string = "Button Clicked!"): void {
    this.x = y;
    console.log(`x has been updated to: ${this.x}`);
  }
  onSubmit(): void {
    if (this.form.valid) {
      console.log('Form Submitted!');
      const successMessage = document.createElement('div');
      successMessage.className = 'alert alert-success alert-dismissible fade show';
      successMessage.role = 'alert';
      successMessage.innerHTML = `
        <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
        <strong>Well done!</strong> You successfully submitted the form.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      `;
      this.x = successMessage.outerHTML;

    } else {
      console.log('Form not Submitted!');
      const warningMessage = document.createElement('div');
      warningMessage.className = 'alert alert-warning alert-dismissible fade show';
      warningMessage.role = 'alert';
      warningMessage.innerHTML = `
        <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Warning:"><use xlink:href="#exclamation-triangle-fill"/></svg>
        <strong>Holy guacamole!</strong> You should check in on some of those fields below.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      `;
      this.x = warningMessage.outerHTML;
    }
  }
}
