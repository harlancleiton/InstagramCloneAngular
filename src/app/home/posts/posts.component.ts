import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private postService: PostService) { }

  public getPosts(): void {
    console.log('getPosts()')
    this.postService.getPosts();
  }

  ngOnInit() {
    this.getPosts()
  }

}
