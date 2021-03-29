import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import Home from '../models/home';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css']
})
export class HomeListComponent implements OnInit {
  constructor(private service: HomeService) { }

  homeList!: Home[];
  ngOnInit(): void {
    this.service.findAll().subscribe((data) => {
      this.homeList = data;
      console.log(this.homeList);
    });
  }

}
