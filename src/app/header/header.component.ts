import { Component, OnInit } from '@angular/core';
import { Authentication } from '../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authentication: Authentication) { }

  public logOut(): void {
    this.authentication.logOut()
  }

  ngOnInit() {
  }

}
