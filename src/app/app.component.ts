import { Component, ViewChild, ElementRef } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { FormState } from './app.state';
import { MatSelect, MatSlideToggle, MatOption } from '@angular/material';
import { ElementSchemaRegistry } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Select(FormState.details) details$: Observable<any>;
  @Select(FormState.text) text$: Observable<any>;
  filtersForm: FormGroup;
  options = [ { id: 1, name: 'One' }, { id: 2, name: 'Two' },  {id: 3, name: 'Three' }];

  title = 'app';

  constructor(
    private formBuilder: FormBuilder,
    private store: Store) {
      this.setupForm();

      this.details$.subscribe(console.log);
      this.text$.subscribe(console.log);
  }

  setupForm() {
    this.filtersForm = this.formBuilder.group({
      text: [null],
      select: [null],
      date: [null]
    });
  }

  submitForm() {
    console.log('Form submit');
  }
}
