import LoginPage from '../pages/LoginPage';

describe('Login functionality', () => {
  let credentials;

  before(() => {
    cy.fixture('credentials').then((data) => {
      credentials = data;
    });
  });

  beforeEach(() => {
    LoginPage.visit();
  });

  it('should not allow login with invalid credentials', () => {
    LoginPage.login(
      credentials.invalidUser.username,
      credentials.invalidUser.password
    );

    LoginPage.elements.errorMessage().should('be.visible');
  });
});
