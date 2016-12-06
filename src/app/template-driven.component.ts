import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css'],
})
export class TemplateDrivenComponent {
  user = {
    username: '',
    email: '',
    password: '',
    gender: 'male'
  }

  genders = [
    'male',
    'female'
  ]

  onSubmit(form: NgForm) {
    console.log(form.value)
  }
}