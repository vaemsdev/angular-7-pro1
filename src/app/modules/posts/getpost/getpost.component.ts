import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-getpost',
  templateUrl: './getpost.component.html',
  styleUrls: ['./getpost.component.css']
})
export class GetpostComponent implements OnInit {

  constructor(
    private config : ConfigService,
    private route: ActivatedRoute
  ) { }

  posts : any = [];

  ngOnInit() {

    this.route.params.subscribe(prm => {
        if(Object.keys(prm).length > 0){

          console.log('sub');
        }
    });
    
    this.config.getPosts().subscribe( data => {
      this.posts = data;
    });
  }

}
