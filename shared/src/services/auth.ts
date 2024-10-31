/**
 * Auth service.
 * @module
 */
export class Auth {
  public isReady: Promise<void>;

  constructor() {
    this.isReady = Promise.resolve();
  }

  public isAuthenticated(): boolean {
    return true;
  }

  public isAdministrator(): boolean {
    return false;
  }
}
