class GoodsList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this.allProduct = [];
        this._bringProducts();
    }
    _bringProducts() {
        this.goods = [
            {id: 1, title: 'Аккумуляторная дрель-шуруповерт ELITECH ДА 14СЛК2 (2,0 Ач)', price: 4999.2, foto:'img/akkumulyatornaya_drel_shurupovert_elitech_da_14slk2_2_0_ach.jpg'},
            {id: 2, title: 'Аккумуляторная дрель-шуруповерт Metabo BS 18 602217500/602116530 (2 Ач)', price: 9666.4, foto:'img/akkumulyatornaya_drel_shurupovert_metabo_bs_18_602217500_602116530_2_ach.jpg'},
            {id: 3, title: 'Перфоратор Metabo KHE 2660 Quick 600663500, 850 Вт', price: 9776.8, foto:'img/perforator_metabo_khe_2660_quick_600663500_850_vt.jpg'},
            {id: 4, title: 'Рубанок Metabo HO 26-82 602682700, 620 Вт', price: 9999.2, foto:'img/rubanok_metabo_ho_26_82_602682700_620_vt.jpg'},
        ];
    }
    render() {
        const Block = document.querySelector(this.container);
        for(let product of this.goods){
            const ProductObj = new ProductItem(product);
            this.allProduct.push(ProductObj);
            Block.insertAdjacentHTML('beforeend', ProductObj.render())
        }
    }
    getSumAll(){
        let sumAllP = this.allProduct.reduce((sum, item) => sum += item.price, 0);
        document.getElementById('result').innerHTML = 'Сумма всех товаров: ' + sumAllP;
    }
}
class ProductItem {
    constructor(product) {
        this.id = product.id;
        this.title = product.title;
        this.price = product.price;
        this.img = product.foto;
    }
    render(){
        return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="imgProduct">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}

let list = new GoodsList();
list.render();
list.getSumAll();

class Basket {
    addProducts(){

    }
    delProducts(){

    }
    sumProducts(){

    }
}