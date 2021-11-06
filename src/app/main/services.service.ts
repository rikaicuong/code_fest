import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './post.model';

@Injectable()
export class ServicesService {
  postUrl = 'https://jsonplaceholder.typicode.com/posts';
  userUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(
    private http: HttpClient,
  ) { }
}
