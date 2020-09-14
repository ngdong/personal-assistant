import { _ParseAST } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { defer, Observable, of } from 'rxjs';

import { CredentialsService } from './credentials.service';

export interface LoginContext {
  username: string;
  password: string;
  remember?: boolean;
}

/**
 * Provides a base for authentication workflow.
 * The login/logout methods should be replaced with proper implementation.
 */
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private user$: Observable<firebase.User>;

  constructor(private afAuh: AngularFireAuth, private credentialsService: CredentialsService) {
    this.user$ = this.afAuh.authState;
    this.user$.subscribe(user => this.credentialsService.setCredentials(user, true));
  }

  /**
   * Authenticates the user.
   * @param context The login parameters.
   * @return The user credentials.
   */
  login({ username, password }: LoginContext): Observable<string> {
    return defer(() => {
      return this.afAuh.signInWithEmailAndPassword(username, password)
        .then(res => {
          this.credentialsService.setCredentials(res.user, true);
          return 'Done';
        });
      });
  }

  /**
   * Logs out the user and clear credentials.
   * @return True if the user was logged out successfully.
   */
  logout(): Observable<boolean> {
    // Customize credentials invalidation here
    return defer(() => {
      return this.afAuh.signOut().then(res => {
        this.credentialsService.setCredentials();
        return true;
      });
    });
  }

}
