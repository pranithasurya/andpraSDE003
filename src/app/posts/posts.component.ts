import { Component, OnInit } from '@angular/core';
import {DataretrieverService} from '../dataretriever.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
	posts:any = [];

  constructor(private dataretrieverService: DataretrieverService) {
  	
  }

  ngOnInit() {
  	this.posts = this.dataretrieverService.getData('/posts');
  	console.log(this.posts);
  }	

}
