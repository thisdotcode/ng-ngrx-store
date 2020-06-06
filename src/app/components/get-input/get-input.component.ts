import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  OnInit,
} from '@angular/core';
import { AppState } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import { AddListItem } from 'src/app/store/actions/my-list.action';

@Component({
  selector: 'app-get-input',
  templateUrl: './get-input.component.html',
  styleUrls: ['./get-input.component.scss'],
})
export class GetInputComponent implements OnInit, AfterViewInit {
  inputValue: string;
  displayError = false;
  @ViewChild('inputEl', { static: false }) inputEl: ElementRef;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.select('myList').subscribe((myList) => {
      this.setItemStatus(myList.showError);
    });
  }

  public addItem(): void {
    // Setting value to listItems variable present in service
    this.store.dispatch(new AddListItem(this.inputValue));
    this.resetInput();
  }

  public setItemStatus(status: boolean): void {
    this.displayError = status;
  }

  public enableAddBtn(): boolean {
    return !(this.inputValue && this.inputValue.trim().length > 0);
  }

  private resetInput(): void {
    this.inputValue = '';
    this.inputEl.nativeElement.focus();
  }

  ngAfterViewInit() {
    this.inputEl.nativeElement.focus();
  }
}
