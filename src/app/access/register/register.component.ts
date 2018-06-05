import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() public loadRegister: EventEmitter<boolean> = new EventEmitter<boolean>()

  constructor() { }

  public navigateLogin(): void {
    this.loadRegister.emit(false)
  }

  ngOnInit() {
  }

}
