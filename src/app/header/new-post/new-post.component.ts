import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Post } from '../../shared/post.model';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  constructor(private postService: PostService) { }

  public formGroup: FormGroup = new FormGroup({
    'title': new FormControl(null)

  })
  private post: Post
  private image: File

  public newPost(): void {
    this.post = new Post(
      this.formGroup.value.title,
      this.image
    )
    this.postService.newPost(this.post)
  }

  public uploadImage(event: Event): void {
    this.image = (<HTMLInputElement>event.target).files[0]
    console.log(this.image)
  }

  ngOnInit() {
  }

}
