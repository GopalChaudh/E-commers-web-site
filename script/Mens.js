let productData = [
    { name: 'Jacket', image: '../allImages/product-1.png', rating: 5, price: '24', tag: 'M' },
    { name: 'Blue jacket', image: '../allImages/M1.jpg', rating: 5, price: '240', tag: 'M' },
    { name: 'Light Pant', image: '../allImages/M2.jpg', rating: 5, price: '240', tag: 'M' },
    { name: 'Shoose', image: '../allImages/M3.jpg', rating: 5, price: '240', tag: 'M' },
    { name: 'blue Pant', image: '../allImages/M5.jpg', rating: 5, price: '240', tag: 'M' },
    { name: 'Jacket', image: '../allImages/M4.jpg', rating: 5, price: '240', tag: 'M' },
    { name: 'locket', image: '../allImages/M7.jpg', rating: 5, price: '240', tag: 'M' },
    { name: 'Pant', image: '../allImages/M6.jpg', rating: 5, price: '240', tag: 'M' },
    { name: 'T-shart', image: '../allImages/product-5.png', rating: 5, price: '240', tag: 'M' },
    { name: 'Shirt', image: '../allImages/f1.jpg', rating: 5, price: '240', tag: 'M' },
    { name: 'shart', image: '../allImages/f2.jpg', rating: 5, price: '240', tag: 'M' },
    { name: 'shart', image: '../allImages/f3.jpg', rating: 5, price: '240', tag: 'M' },
    { name: 'shart', image: '../allImages/f4.jpg', rating: 5, price: '240', tag: 'M' },
    { name: 'shart', image: '../allImages/f5.jpg', rating: 5, price: '240', tag: 'M' },
    { name: 'shart', image: '../allImages/f6.jpg', rating: 5, price: '240', tag: 'M' },
    { name: 'pent', image: '../allImages/f7.jpg', rating: 5, price: '240', tag: 'M' },
    { name: 'shart', image: '../allImages/n1.jpg', rating: 5, price: '240', tag: 'M' },
    { name: 'shart', image: '../allImages/n2.jpg', rating: 5, price: '240', tag: 'M' },
    { name: 'shart', image: '../allImages/n3.jpg', rating: 5, price: '240', tag: 'M' },
    { name: 'shart', image: '../allImages/n4.jpg', rating: 5, price: '240', tag: 'M' },
    { name: 'shart', image: '../allImages/n5.jpg', rating: 5, price: '240', tag: 'M' },
    { name: 'pent', image: '../allImages/n6.jpg', rating: 5, price: '240', tag: 'M' },
    { name: 'shart', image: '../allImages/n7.jpg', rating: 5, price: '240', tag: 'M' },
    { name: 'shart', image: '../allImages/n8.jpg', rating: 5, price: '240', tag: 'M' },
]



function itemdraw(name, image, stars, value) {
    item = document.createElement('div');
    item.classList.add('item')
    productimage = document.createElement('img');
    productimage.classList.add('productimage')
    productimage.src = image;
    alltexts = document.createElement('div');
    alltexts.classList.add('alltexts');
    productname = document.createElement('div');
    productname.classList.add('productname');
    productname.innerHTML = name;
    rating = document.createElement('div');
    ratingholder = document.createElement('span')
    ratingholder.classList.add('material-symbols-outlined');
    ratingholder.classList.add('starsetting')
    ratingholder.style = ""
    rating.classList.add('rating')
    rating.innerHTML = ''
    rating.append(ratingholder);
    price = document.createElement('div');
    price.classList.add('price');
    price.innerHTML = value + '$';
    for (let i = 0; i < stars; i++) {

        ratingholder.innerHTML = ratingholder.innerHTML + 'star '
    }
    alltexts.append(productname, rating, price)
    item.append(productimage, alltexts,)
    all_products = document.querySelector('.Manproducts');
    all_products.append(item)


}
function diplayingProducts() {
    for (let i = 0; i < productData.length; i++) {
        itemdraw(productData[i].name, productData[i].image, productData[i].rating, productData[i].price);

    }

}


diplayingProducts()