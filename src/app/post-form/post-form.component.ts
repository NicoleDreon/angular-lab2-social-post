import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
})
export class PostFormComponent implements OnInit {
  @Output() submitEvent = new EventEmitter<Post>();
  @Output() startThought = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  emitSubmitPost = (form: NgForm): void => {
    let newPost: Post = {
      title: form.value.title,
      thought: form.value.thought,
    };
    this.submitEvent.emit(newPost);
    form.reset();
  };
  emitNewThought = () => {
    this.startThought.emit();
  };
}
