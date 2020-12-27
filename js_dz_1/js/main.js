const products = [
    {id: 1, title: 'Аккумуляторная дрель-шуруповерт ELITECH ДА 14СЛК2 (2,0 Ач)', price: 4999.2, foto:'img/akkumulyatornaya_drel_shurupovert_elitech_da_14slk2_2_0_ach.jpg'},
    {id: 2, title: 'Аккумуляторная дрель-шуруповерт Metabo BS 18 602217500/602116530 (2 Ач)', price: 9666.4, foto:'img/akkumulyatornaya_drel_shurupovert_metabo_bs_18_602217500_602116530_2_ach.jpg'},
    {id: 3, title: 'Перфоратор Metabo KHE 2660 Quick 600663500, 850 Вт', price: 9776.8, foto:'img/perforator_metabo_khe_2660_quick_600663500_850_vt.jpg'},
    {id: 4, title: 'Рубанок Metabo HO 26-82 602682700, 620 Вт', price: 9999.2, foto:'img/rubanok_metabo_ho_26_82_602682700_620_vt.jpg'},
];
//Функция для формирования верстки каждого товара
const renderProduct = (product) => {
    return `<div class="product-item">
                <img src="${product.foto}">
                <h3>${product.title}</h3>
                <p>${product.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
};
const renderPage = list => {
    document.querySelector('.products').innerHTML = list.map(item => renderProduct(item)).join('');
};

renderPage(products);
