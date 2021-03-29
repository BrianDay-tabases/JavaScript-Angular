import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import Home from '../models/home';

@Component({
  selector: 'app-new-home',
  templateUrl: './new-home.component.html',
  styleUrls: ['./new-home.component.css']
})
export class NewHomeComponent implements OnInit {
  homeToSave: Home = new Home(); // When the user commits the form
 // When the user commits the form
  constructor(private service: HomeService) { }

  save(): void {
    this.service.save(this.homeToSave).subscribe(data => {
      console.log(data);
    });
  }

  ngOnInit(): void {
  }

}
