console.log("\n3. Create product object with properties product number, product name, model, price and a method to return discount price by receiving the discount percentage as argument.");
let product={
    productNo:1234,
    productName:"Apple iPhone 15 Pro",
    model:"iPhone 15 Pro",
    price:100000,
    discountPrice:function(discount){
        return this.price-(this.price*discount/100);
    }
}
console.log(product);
console.log("The Discount Price of the Product is: "+product.discountPrice(10));