// Cau 1: Khai baso constructor Product
let Product = function(id, name, price, quantity, category, isAvailable) {
    this.id = id,
    this.name = name,
    this.price = price,
    this.quantity = quantity,
    this.category = category,
    this.isAvailable = isAvailable
}

// Cau 2: Tao mang products chua 5 san pham, thuoc toi thieu 2 danh muc khac nhau
let products = [
    new Product(1, "Laptop", 1500, 10, "Electronics", true),
    new Product(2, "Smartphone", 800, 25, "Electronics", true),
    new Product(3, "Desk Chair", 120, 15, "Accessories", true),
    new Product(4, "Notebook", 5, 100, "Stationery", true),
    new Product(5, "Pen", 2, 200, "Stationery", false)
];

// Cau 3: Tao mang moi chi chua name, price cua moi san pham
let arr = products.map(product => ({
        name: product.name,
        price: product.price
}))
console.log(arr);

// Cau 4: Loc ra nhung san pham con trong kho (quantity > 0)
let stockQuantity = products.filter(function(e){
    return e.quantity > 0
})
console.log(stockQuantity);

// Cau 5: Kiem tra xem co it nhat 1 san pham co gia tren 30 hay khong
checkPrice = products.some(function(e){
    return e.price > 30
})
console.log(checkPrice);

// Cau 6: Kiem tra xem tat ca san pham thuoc danh muc "Accessories" co dang duoc ban (isAvailable = true) hay khong
checkCategory = products.every(function(e){
    return e.category === "Accessories" ? e.isAvailable === true : true
})
console.log(checkCategory);

// Cau 7: Tinh tong gia tri kho hang. Gia tri kho = price * quantity
let total = products.reduce(function(accumulator, product){
    return accumulator + (product.price * product.quantity)
}, 0)
console.log(total);

// Cau 8: Dung for...of duyet mang products va in ra: Ten san pham - Danh muc - Trang thai
for (let product of products) {
    console.log(`${product.name} - ${product.category} - ${product.isAvailable ? "Available" : "Not Available"}`);
}

// Cau 9: Dung for..in de: 1. In ra Ten thuoc tinh; 2. In ra gia tri tuong ung
for (let index in products[0]) {
    console.log(`Property: ${index}, Value: ${products[0][index]}`);
}

// Cau 10: Lay danh sach ten cac san pham dang ban va con hang
let checkProducts = [];
for (let product of products) {
    if (product.isAvailable && product.quantity > 0) {
        checkProducts.push(product.name);
    }
}
console.log(checkProducts);