import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() public loadRegister: EventEmitter<boolean> = new EventEmitter<boolean>()

  constructor() { }

  public navigateRegister(): void {
    this.loadRegister.emit(true)
  }


  ngOnInit() {
  }

}
