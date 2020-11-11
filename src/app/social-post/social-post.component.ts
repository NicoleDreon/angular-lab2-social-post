import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-social-post',
  templateUrl: './social-post.component.html',
  styleUrls: ['./social-post.component.css'],
})
export class SocialPostComponent implements OnInit {
  posts: Post[] = [
    {
      title: 'Coding Begins',
      thought:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    },
    {
      title: 'JavaScript is a tricky fish',
      thought:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    },
    {
      title: 'Angular saves the day',
      thought:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  deletePost = (index: number): void => {
    this.posts.splice(index, 1);
  };

  onSubmit = (post: Post): void => {
    this.posts.unshift(post);
  };
}
