import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  title = 'Search Page';
  heading1 = 'This is short heading';

  constructor() { }

  ngOnInit() {
    console.log('search:ngOnInit');
  }

}
