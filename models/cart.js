module.exports = function Cart(initItems) {
    this.items = initItems;
    this.totalQty = 0;
    this.totalPrice = 0;

    if (this.items) {
        for (var key in this.items) {
            this.totalQty += this.items[key].qty;
            this.totalPrice += this.items[key].qty * this.items[key].item.price;
        }
    }

    this.add = function (item, id) {
        var storedItem = this.items[id];
        if (!storedItem) {
            storedItem = this.items[id] = { id: id, qty: 0, item: item, price: 0 };
        }
        storedItem.qty++;
        storedItem.price = storedItem.item.price * storedItem.qty;
        this.totalQty++;
        this.totalPrice += storedItem.item.price;
    };

    this.addByQty = function (item, id, qty) {
        console.log(qty+"***")
        var storedItem = this.items[id];
        if (!storedItem) {
            storedItem = this.items[id] = { id: id, qty: 0, item: item, price: 0 };
        }
        this.totalQty -= storedItem.qty
        this.totalPrice -= storedItem.item.price;

        storedItem.qty = qty
        this.totalQty += storedItem.qty
        storedItem.price = storedItem.item.price * storedItem.qty;
        this.totalPrice += storedItem.item.price;
    };

    this.remove = function(id) {
        var storedItem = this.items[id];
        storedItem.qty--;
        storedItem.price = storedItem.item.price * storedItem.qty;
        this.totalQty--;
        this.totalPrice -= storedItem.item.price;
    }


    this.generateArray = function () {
        var arr = [];
        for (var id in this.items) {
            arr.push(this.items[id]);
        }
        return arr;
    };
};