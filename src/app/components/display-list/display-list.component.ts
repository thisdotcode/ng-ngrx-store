import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { DeleteListItem } from 'src/app/store/actions/my-list.action';

@Component({
  selector: 'app-display-list',
  templateUrl: './display-list.component.html',
  styleUrls: ['./display-list.component.scss'],
})
export class DisplayListComponent implements OnInit {
  listItems: string[] = [];
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.select('myList').subscribe((listItems) => {
      this.listItems = listItems.myList;
    });
  }

  deleteItem(id: number): void {
    this.store.dispatch(new DeleteListItem(id));
  }
}
