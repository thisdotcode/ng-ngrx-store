import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  OnInit,
} from '@angular/core';
import { AppState } from '../../store/app.state';

import { Store } from '@ngrx/store';
import { AddListItem } from '../../store/actions/my-list.action';

@Component({
  selector: 'app-get-input',
  templateUrl: './get-input.component.html',
  styleUrls: ['./get-input.component.scss'],
})
export class GetInputComponent implements AfterViewInit {
  inputValue: string;
  displayError = false;
  @ViewChild('inputEl', { static: false }) inputEl: ElementRef;

  constructor(private store: Store<AppState>) {}

  public addItem(): void {
    // Dispatching action object to store
    this.store.dispatch(new AddListItem(this.inputValue));
    this.resetInput();
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
