import { Component, OnInit } from '@angular/core';
import {DataretrieverService} from '../dataretriever.service';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['../posts/posts.component.css']
})
export class QuotesComponent implements OnInit {
  quotes:any = [];

  constructor(private dataretrieverService: DataretrieverService) {
  	
  }

  ngOnInit() {
  	this.quotes = this.dataretrieverService.getData('/quotes');
  	console.log(this.quotes);
  }	



}
