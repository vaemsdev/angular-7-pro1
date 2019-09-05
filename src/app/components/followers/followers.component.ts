import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {

  constructor(
    private config : ConfigService
  ) { }

  items : any = [];

  ngOnInit() {

    this.config.getFollowers().subscribe( data => {
      console.log(data)
      this.items = data;
    });
  }

}
