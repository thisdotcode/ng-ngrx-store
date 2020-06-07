import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { DeleteListItem } from '../../store/actions/my-list.action';

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
      // Assinging updated state from store to the property present in component
      this.listItems = listItems;
    });
  }

  deleteItem(id: number): void {
    this.store.dispatch(new DeleteListItem(id));
  }
}
