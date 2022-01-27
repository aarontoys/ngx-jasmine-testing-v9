import { createReducer, on } from '@ngrx/store';
import { AuthActions } from '../actions';

export interface State {
  username: string;
}

export const initialState: State = {
  username: ''
};

export const reducer = createReducer<State>(
  initialState,
  on(AuthActions.login, ({ username }): State => ({ username })),
  on(AuthActions.logout, (): State => ({ username: initialState.username })),
);

export const getUsername = (state: State) => state.username;


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/