import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { HomeService } from '../shared/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private home: HomeService
    ) { }

  ngOnInit() {
  }


}
