
import Page from "./page.js";

class CartPage extends Page {
    open(path){
        return super.open("cart.html");
    }

    get itemName() { 
        return $('.inventory_item_name[data-test="inventory-item-name"]'); 
    }


    get getItemName() {
        return this.itemName.getText();
    }

    async validateOnPage(){
        expect(this.getItemName).toHaveText("Sauce Labs Bike Light")
    }
}

export default new CartPage();
