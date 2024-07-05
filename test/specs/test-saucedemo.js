import 'dotenv/config';
import dashboardPage from "../pageobjects/dashboard.page.js";
import loginPage from "../pageobjects/login.page.js";
import cartPage from '../pageobjects/cart.page.js';



describe('Add item to cart', () => {
    it('Successful Add item to cart', async () => {
        console.log('USERNAME:', process.env.USERNAME); // Tambahkan console log di sini
        await loginPage.open();
        await loginPage.login(process.env.USERNAMESD, process.env.PASSWORDSD);
        await dashboardPage.validateOnPage();
        await dashboardPage.addItemToCart();
        await cartPage.validateOnPage();

    });
});
