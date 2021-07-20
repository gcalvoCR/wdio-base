import { adminUser } from '../../data/users';
import LoginPage from '../../pages/login.page';
import SecurePage from '../../pages/secure.page';

describe('My Login application', () => {
    before(async () => {
        console.log('To Run before each all within this suite');
    });

    beforeEach(async () => {
        console.log('To Run before each test');
    });

    it('should login with valid credentials', async () => {
        await LoginPage.open();

        await LoginPage.login(adminUser.username, adminUser.password);
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining('You logged into a secure area!');
    });

    it('should login with valid credentials', async () => {
        await LoginPage.open();

        await LoginPage.login(adminUser.username, adminUser.password);
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining('You logged into a secure area!');
    });

    afterEach(async () => {
        console.log('To run after each test');
    });

    after(async () => {
        console.log('To run after all tests');
    });
});
