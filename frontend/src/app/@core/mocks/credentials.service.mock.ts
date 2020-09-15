export class MockCredentialsService {

  credentials: firebase.UserInfo | null = {
    displayName: 'test',
    email: 'test',
    phoneNumber: 'test',
    photoURL: 'test',
    providerId: '123',
    uid: '123456'
  };

  isAuthenticated(): boolean {
    return !!this.credentials;
  }

  setCredentials(credentials?: firebase.UserInfo) {
    this.credentials = credentials || null;
  }

}
