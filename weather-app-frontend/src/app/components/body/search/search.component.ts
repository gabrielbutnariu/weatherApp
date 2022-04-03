import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  message:any;
  subscription: any;

  constructor(private searchData : SearchService) { }

  ngOnInit() {
    this.subscription = this.searchData.currentMessage.subscribe(message => this.message = message)
  }
  getUserInput(event: any) {
    this.searchData.changeMessage(event.target.value);
 }
 
 ngOnDestroy() {
  this.subscription.unsubscribe();
}
}
