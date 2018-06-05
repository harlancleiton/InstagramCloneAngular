import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../../shared/user.model';
import { Authentication } from '../../services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() public loadRegister: EventEmitter<boolean> = new EventEmitter<boolean>()
  public formGroup: FormGroup = new FormGroup({
    'email': new FormControl(null, [Validators.minLength(7), Validators.maxLength(30), Validators.required]),
    'username': new FormControl(null, [Validators.minLength(4), Validators.maxLength(16), Validators.required]),
    'name': new FormControl(null, [Validators.minLength(3), Validators.maxLength(50), Validators.required]),
    'password': new FormControl(null, [Validators.minLength(6), Validators.maxLength(20), Validators.required])
  })
  private user: User

  constructor(private authentication: Authentication) { }

  public navigateLogin(): void {
    this.loadRegister.emit(false)
  }

  public register(): void {
    this.user = new User(
      this.formGroup.value.email,
      this.formGroup.value.username,
      this.formGroup.value.name,
      this.formGroup.value.password
    )
    console.log(this.user)
    this.authentication.registerUser(this.user).then(() => {
      this.loadRegister.emit(false)
      this.authentication.logOut
    })
  }

  ngOnInit() {
  }

}
