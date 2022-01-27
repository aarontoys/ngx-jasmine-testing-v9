import {
  createSelector,
  createFeatureSelector,
} from '@ngrx/store';
import * as fromAuth from './auth.reducer';

export interface AuthState {
  status: fromAuth.State;
}

export interface State {
  auth: AuthState;
}

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectAuthStatusState = createSelector(
  selectAuthState,
  (state: AuthState) => state.status
);

export const getUsername = createSelector(
  selectAuthStatusState,
  fromAuth.getUsername
);


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/