
let productData = [
    { name: 'Blause', image: '../allImages/g4.jpg', rating: 5, price: '20', tag: 'W' },
    { name: 'Women Shirt', image: '../allImages/g6.jpg', rating: 5, price: '240', tag: 'W' },
    { name: 'Frok', image: '../allImages/product-2.png', rating: 5, price: '240', tag: 'W' },
    { name: 'T-shart', image: '../allImages/g9.jpg', rating: 5, price: '240', tag: 'W' },
    { name: 'T-shart', image: '../allImages/g2.jpg', rating: 5, price: '240', tag: 'W' },
    { name: 'T-shart', image: '../allImages/g5.jpg', rating: 5, price: '240', tag: 'W' },
    { name: 'Pant', image: '../allImages/g1.jpg', rating: 5, price: '240', tag: 'W' },
    { name: 'Black Dress', image: '../allImages/g7.jpg', rating: 5, price: '240', tag: 'W' },
    { name: 'Red T-shart', image: '../allImages/g10.jpg', rating: 5, price: '240', tag: 'W' },
    { name: 'T-shart', image: '../allImages/g13.jpg', rating: 5, price: '240', tag: 'W' },
    { name: 'White-Dress', image: '../allImages/g14.jpg', rating: 5, price: '240', tag: 'W' },
    { name: 'T-shart', image: '../allImages/g8.jpg', rating: 5, price: '240', tag: 'W' },
    { name: 'T-shart', image: '../allImages/g12.jpg', rating: 5, price: '240', tag: 'W' },
    { name: 'Blouse', image: '../allImages/g3.jpg', rating: 5, price: '240', tag: 'W' },
    { name: 'Mshart', image: '../allImages/g11.jpg', rating: 5, price: '240', tag: 'W' },
    { name: 'dress', image: '../allImages/f8.jpg', rating: 5, price: '240', tag: 'W' },
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
    all_products = document.querySelector('.WomenProducts');
    all_products.append(item)


}
function diplayingProducts() {
    for (let i = 0; i < productData.length; i++) {
        itemdraw(productData[i].name, productData[i].image, productData[i].rating, productData[i].price);

    }

}


diplayingProducts()