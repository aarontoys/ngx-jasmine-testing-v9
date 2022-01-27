import { createAction, props } from '@ngrx/store';

export const login = createAction('[Auth] Login', props<{ username: string }>());
export const logout = createAction('[Auth] Logout');


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/