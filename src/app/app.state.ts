import { Injectable } from '@angular/core';
import { State, Selector, Store } from '@ngxs/store';

@State({
  name: 'form',
  defaults: {
    details: {
      model: [],
      dirty: false,
      status: '',
      errors: {}
    }
  }
})
@Injectable()
export class FormState {
  constructor(private store: Store) {}

  @Selector()
  static details(state: any) {
    return state.details;
  }
  @Selector()
  static text(state: any) {
    return state.details.model.text;
  }
}
