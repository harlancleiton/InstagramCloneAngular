import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyC-b332rorCWJmvUbmRC99SUGZGJ9XOveM",
      authDomain: "instagramangular-ba179.firebaseapp.com",
      databaseURL: "https://instagramangular-ba179.firebaseio.com",
      projectId: "instagramangular-ba179",
      storageBucket: "",
      messagingSenderId: "498832327836"
    };
    firebase.initializeApp(config);
  }

}
