module.exports.shop_get = (req, res) => {
    console.log("shop")
    res.render('shop', { title: 'SHOP' });
};

module.exports.shopitem_get = (req, res) => {
	console.log("item details");
    res.render('shop-item', { title: 'Item Details' });
};

module.exports.checkout_get = (req, res) => {
	console.log("checkout");
    res.render('checkout', { title: 'Checkout' });
};