import { adminUser } from '../data/users';
import loginPage from '../pages/login.page';

export const login = async (): Promise<void> => {
    await (await loginPage.inputUsername).setValue(adminUser.username);
    await (await loginPage.inputPassword).setValue(adminUser.password);
    await (await loginPage.btnSubmit).click();
};
