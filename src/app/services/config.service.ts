import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigService {

  constructor(private http: HttpClient) { }

  getFollowers() {
    
    return this.http.get('/api/followers');
  }

  getPosts(id = 0) {
    if(id == null || id == undefined || id == 0 )
      return this.http.get('/api/posts');
    else
      return this.http.get('/api/posts/' + id);
  }
}
