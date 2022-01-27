import { Component, OnDestroy } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromAuth from './reducers';

@Component({
  selector: 'user-greeting',
  template: `
    <div>Greetings, {{ username$ | async }}!</div>
  `,
})
export class UserGreetingComponent implements OnDestroy {
  username$ = this.store.pipe(select(fromAuth.getUsername));

  constructor(private store: Store<fromAuth.State>) {}

  ngOnDestroy() {
    console.log(`ngOnDestroy only runs if there are multiple tests. 'xit' a test
                 and you won't see this comment.`)
    
    /* 
    
      Subscribing to the selector will throw the following error when the unit tests
      are run, provided there is more than one unit test.
      
      Error in /~/src/app/reducers/index.ts (26:98)
      Cannot read properties of undefined (reading 'status')

    */

    this.store.pipe(select(fromAuth.getUsername))
      // .subscribe();
  }
}


/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
