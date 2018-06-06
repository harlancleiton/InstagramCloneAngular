import { Component, OnInit, Pipe } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Post } from '../../shared/post.model';
import { PostService } from '../../services/post.service';
import { ProgressService } from '../../services/progress.service';
import { Observable, interval, observable, Subject, pipe } from 'rxjs';
import { takeUntil } from 'rxjs/operators'

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})

export class NewPostComponent implements OnInit {

  constructor(
    private postService: PostService,
    private progressService: ProgressService
  ) { }

  public formGroup: FormGroup = new FormGroup({
    'title': new FormControl(null)

  })
  private post: Post
  private image: File
  public progress: number = 0

  public newPost(): void {
    this.post = new Post(
      this.formGroup.value.title,
      this.image
    )
    this.postService.newPost(this.post)

    let observer = interval(1000)
    let proceed = new Subject()

    observer
      .pipe(takeUntil(proceed))
      .subscribe(() => {
        this.progress = this.progressService.getProgress()
        if (this.progressService.status == this.progressService.COMPLETE)
          proceed.next(false)
      })
  }

  public uploadImage(event: Event): void {
    this.image = (<HTMLInputElement>event.target).files[0]
  }

  ngOnInit() {
  }

}
