import LoginPage from '../pages/LoginPage';

describe('Login functionality', () => {
  beforeEach(() => {
    LoginPage.visit();
  });

  it('should not allow login with invalid credentials', () => {
    LoginPage.login('invalidUser', 'invalidPassword');
    LoginPage.elements.errorMessage().should('be.visible');
  });
});
