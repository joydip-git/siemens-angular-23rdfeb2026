import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration',
  standalone: false,
  templateUrl: './registration.html',
  styleUrl: './registration.css',
})
export class Registration {
  submit(frm: NgForm) {
    console.log(frm.value);
  }
}
