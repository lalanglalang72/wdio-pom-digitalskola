import Page from "./page.js";

class dashboardPage extends Page{
    open(path){
        return super.open("inventory.html")
    }

    get itemCheckout(){
        return $("#add-to-cart-sauce-labs-backpack")
    }

    get cartIcon(){
        return $("#shopping_cart_container")
    }

    async validateOnPage(){
        expect(this.cartIcon).toBeDisplayed();
    }

    async addItemToCart(){
        await this.itemCheckout.click();
        await this.cartIcon.click();
    }
}

export default new dashboardPage();