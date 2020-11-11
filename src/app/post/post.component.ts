import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  @Output() deletePost = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}

  emitDeletePost = (): void => {
    this.deletePost.emit();
  };
}
