console.log("2. Create Product class and add properties brand, price, model and add getDiscountPrice method to its prototype. Create 5 Products objects and print their discount price. Note: For each object of these 5 , send different discount percentages as argument")
class Product{
    constructor(brand,price,model){
        this.brand=brand;
        this.price=price;
        this.model=model;
    }
    getDiscountPrice = function(discount){
        return this.price-(this.price*discount/100);
    }
}
let product1=new Product("Apple",100000,"iPhone 15 Pro");
let product2=new Product("Samsung",80000,"Galaxy S23 Ultra");
let product3=new Product("OnePlus",70000,"OnePlus 11 Pro");
let product4=new Product("Apple",70000,"iPhone 11 Pro");
let product5=new Product("Apple",20000,"iPhone 7 Plus");

console.log("The Discount Price of Product 1 is: "+product1.getDiscountPrice(10)); 
console.log("The Discount Price of Product 2 is: "+product2.getDiscountPrice(20));
console.log("The Discount Price of Product 3 is: "+product3.getDiscountPrice(30));
console.log("The Discount Price of Product 4 is: "+product4.getDiscountPrice(40));
console.log("The Discount Price of Product 5 is: "+product5.getDiscountPrice(50));