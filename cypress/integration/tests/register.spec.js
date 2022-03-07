import { userInfo } from '../../support/helper';
import { clickOnSignInButton } from '../actions/home-actions';
import { validateMyAccountPage } from '../actions/my-account-actions';
import { typeEmailAddress, fillPersonalInformationForm } from '../actions/auth-actions';

context('Automation Challenge 4 Fun', () => {
    beforeEach(() => {
        cy.window().then((win) => {
        win.sessionStorage.clear();
      });
      cy.visit('/');
      cy.wait(1000);
    });

    it('Create an account', () => {
        clickOnSignInButton();
        typeEmailAddress(userInfo.userData.email);
        fillPersonalInformationForm(
            userInfo.userData.firstName,
            userInfo.userData.lastName,
            userInfo.userData.password,
            userInfo.userData.dayOfBirth,
            userInfo.userData.monthOfBirth,
            userInfo.userData.yearOfBirth,
            userInfo.userData.company,
            userInfo.userData.address,
            userInfo.userData.city,
            userInfo.userData.state,
            userInfo.userData.postalCode,
            userInfo.userData.moreInfo,
            userInfo.userData.phoneNumber
        );
        validateMyAccountPage();
    });
});