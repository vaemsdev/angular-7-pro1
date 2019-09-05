import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from 'src/app/services/config.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-viewpost',
  templateUrl: './viewpost.component.html',
  styleUrls: ['./viewpost.component.css']
})

export class ViewpostComponent implements OnInit {

  constructor(
    private route : ActivatedRoute,
    private postman : ConfigService
  ) { }

  post : Post = new Post();

  ngOnInit() {
    this.route.params.subscribe(prm =>{
        this.postman.getPosts(prm.id).subscribe(getpost => {
          this.post.setPost(getpost);
        });
    });
  }

}
