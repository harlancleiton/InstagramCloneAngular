import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() public loadRegister: EventEmitter<boolean> = new EventEmitter<boolean>()
  public formGroup: FormGroup = new FormGroup({
    'email': new FormControl(null, [Validators.minLength(7), Validators.maxLength(30), Validators.required]),
    'password': new FormControl(null, [Validators.minLength(6), Validators.maxLength(20), Validators.required])
  })

  constructor() { }

  public navigateRegister(): void {
    this.loadRegister.emit(true)
  }

  public login(): void {
    console.log(this.formGroup)
  }

  ngOnInit() {
  }

}
