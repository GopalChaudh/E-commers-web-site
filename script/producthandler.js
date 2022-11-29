let all_products, item, productimage, alltexts, productname, rating, ratingholder, price;
let totalmen=0;
let totalwomen=0;
let totalacsesories=0;
let totalkids=0;
let bottomnev = Array.from(document.querySelectorAll('.active_nav'));
// this is for item adress

let productData = [
    { name: 'Jacket', image: '../allImages/product-1.png', rating: 5, price: '24', tag: 'M' },
    { name: 'Blause', image: '../allImages/g4.jpg', rating: 5, price: '20', tag: 'W' },
    { name: 'Blue jacket', image: '../allImages/M1.jpg', rating: 5, price: '240', tag: 'M' },
    { name: 'Light Pant', image: '../allImages/M2.jpg', rating: 5, price: '240', tag: 'M' },
    { name: 'Shoose', image: '../allImages/M3.jpg', rating: 5, price: '240', tag: 'M' },
    { name: 'blue Pant', image: '../allImages/M5.jpg', rating: 5, price: '240', tag: 'M' },
    { name: 'Ear Buds', image: '../allImages/product-11.png', rating: 5, price: '240', tag: 'A' },
    { name: 'Women Shirt', image: '../allImages/g6.jpg', rating: 5, price: '240', tag: 'W' },
    { name: 'Frok', image: '../allImages/product-2.png', rating: 5, price: '240', tag: 'W' },
    { name: 'T-shart', image: '../allImages/g9.jpg', rating: 5, price: '240', tag: 'W' },
    { name: 'T-shart', image: '../allImages/g2.jpg', rating: 5, price: '240', tag: 'W' },
    { name: 'Jacket', image: '../allImages/M4.jpg', rating: 5, price: '240', tag: 'M' },
    { name: 'LapTop', image: '../allImages/product-13.png', rating: 5, price: '240', tag: 'A' },
    { name: 'T-shart', image: '../allImages/g5.jpg', rating: 5, price: '240', tag: 'W' },
    { name: 'locket', image: '../allImages/M7.jpg', rating: 5, price: '240', tag: 'M' },
    { name: 'Pant', image: '../allImages/g1.jpg', rating: 5, price: '240', tag: 'W' },
    { name: 'Sandals', image: '../allImages/product-9.png', rating: 5, price: '240', tag: 'A' },
    { name: 'Sports Shoos', image: '../allImages/product-8.png', rating: 5, price: '240', tag: 'A' },
    { name: 'Black Dress', image: '../allImages/g7.jpg', rating: 5, price: '240', tag: 'W' },
    { name: 'Red T-shart', image: '../allImages/g10.jpg', rating: 5, price: '240', tag: 'W' },
    { name: 'T-shart', image: '../allImages/g13.jpg', rating: 5, price: '240', tag: 'W' },
    { name: 'Pant', image: '../allImages/M6.jpg', rating: 5, price: '240', tag: 'M' },
    { name: 'White-Dress', image: '../allImages/g14.jpg', rating: 5, price: '240', tag: 'W' },
    { name: 'Head Phone', image: '../allImages/product-6.png', rating: 5, price: '240', tag: 'A' },
    { name: 'Glasses', image: '../allImages/product-4.png', rating: 5, price: '2', tag: 'A' },
    { name: 'Watch', image: '../allImages/product-12.png', rating: 5, price: '24', tag: 'A' },
    { name: 'Watch', image: '../allImages/product-3.png', rating: 5, price: '200', tag: 'A' },
    { name: 'T-shart', image: '../allImages/g8.jpg', rating: 5, price: '240', tag: 'W' },
    { name: 'Carry', image: '../allImages/product-7.png', rating: 5, price: '240', tag: 'A' },
    { name: 'Mouse', image: '../allImages/product-10.png', rating: 5, price: '240', tag: 'A' },
    { name: 'T-shart', image: '../allImages/product-5.png', rating: 5, price: '240', tag: 'M' },
    { name: 'T-shart', image: '../allImages/g12.jpg', rating: 5, price: '240', tag: 'W' },
    { name: 'Watch', image: '../allImages/product-12.png', rating: 5, price: '240', tag: 'A' },
    { name: 'Blouse', image: '../allImages/g3.jpg', rating: 5, price: '240', tag: 'W' },
    { name: 'Watch', image: '../allImages/product-14.png', rating: 5, price: '240', tag: 'A' },
    { name: 'Mshart', image: '../allImages/g11.jpg', rating: 5, price: '240', tag: 'W' },
    { name: 'PS5', image: '../allImages/product-15.png', rating: 5, price: '240', tag: 'A' },
    { name: 'Shirt', image: '../allImages/f1.jpg', rating: 5, price: '240', tag: 'M' },
    { name: 'shart', image: '../allImages/f2.jpg', rating: 5, price: '240', tag: 'M' },
    { name: 'shart', image: '../allImages/f3.jpg', rating: 5, price: '240', tag: 'M' },
    { name: 'shart', image: '../allImages/f4.jpg', rating: 5, price: '240', tag: 'M' },
    { name: 'shart', image: '../allImages/f5.jpg', rating: 5, price: '240', tag: 'M' },
    { name: 'shart', image: '../allImages/f6.jpg', rating: 5, price: '240', tag: 'M' },
    { name: 'pent', image: '../allImages/f7.jpg', rating: 5, price: '240', tag: 'M' },
    { name: 'dress', image: '../allImages/f8.jpg', rating: 5, price: '240', tag: 'W' },
    { name: 'shart', image: '../allImages/n1.jpg', rating: 5, price: '240', tag: 'M' },
    { name: 'shart', image: '../allImages/n2.jpg', rating: 5, price: '240', tag: 'M' },
    { name: 'shart', image: '../allImages/n3.jpg', rating: 5, price: '240', tag: 'M' },
    { name: 'shart', image: '../allImages/n4.jpg', rating: 5, price: '240', tag: 'M' },
    { name: 'shart', image: '../allImages/n5.jpg', rating: 5, price: '240', tag: 'M' },
    { name: 'pent', image: '../allImages/n6.jpg', rating: 5, price: '240', tag: 'M' },
    { name: 'shart', image: '../allImages/n7.jpg', rating: 5, price: '240', tag: 'M' },
    { name: 'shart', image: '../allImages/n8.jpg', rating: 5, price: '240', tag: 'M' },
]




const totalcount = ()=>{
    for (let i = 0; i < productData.length; i++) {
        if(productData[i].tag==='M'){
            totalmen += 1;
        }
        if(productData[i].tag==='W'){
            totalwomen += 1;
        }
        if(productData[i].tag==='A'){
            totalacsesories += 1;
        }
        if(productData[i].tag==='K'){
            totalkids += 1;
        }
       else{
        continue;
       }
    }
    document.querySelector('.texts p').innerHTML = totalwomen+' Items';
    document.querySelector('.texts2 p').innerHTML = totalacsesories+' Items';
    document.querySelector('.texts3 p').innerHTML = totalmen+' Items';
document.querySelector('.texts4 p').innerHTML = totalkids+' Items';
}
totalcount();
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
    all_products = document.querySelector('.all_products');
    all_products.append(item)


}

function diplayingProducts() {
    for (let i = 0; i < productData.length; i++) {
        itemdraw(productData[i].name, productData[i].image, productData[i].rating, productData[i].price);

    }

}


diplayingProducts()

let itemlength = document.querySelectorAll('.item').length;
function removeproducts() {
    if (document.querySelectorAll('.item').length > 0) {
        for (let i = 0; i <= itemlength - 1; i++) {
            document.querySelector('.item').parentNode.removeChild(document.querySelector('.item'))
        }

    }
    itemlength = document.querySelectorAll('.item').length
}
bottomnev.forEach((element) => {
    element.addEventListener('click', () => {




        bottomnev.forEach((element) => {
            element.classList.remove('activated')

        })
        removeproducts();

        if (element.value > -1) {
            removeproducts();
            for (let i = 0; i < productData.length; i++) {
                if (element.value === 0) {

                    if (productData[i].tag === 'W') {

                        itemdraw(productData[i].name, productData[i].image, productData[i].rating, productData[i].price);
                        itemlength = document.querySelectorAll('.item').length
                    }
                }
                else if (element.value === 1) {

                    if (productData[i].tag === 'M') {

                        itemdraw(productData[i].name, productData[i].image, productData[i].rating, productData[i].price);
                        itemlength = document.querySelectorAll('.item').length
                    }
                }
                else if (element.value === 2) {

                    if (productData[i].tag === 'K') {

                        itemdraw(productData[i].name, productData[i].image, productData[i].rating, productData[i].price);
                        itemlength = document.querySelectorAll('.item').length
                    }
                }
                else if (element.value === 3) {

                    if (productData[i].tag === 'A') {

                        itemdraw(productData[i].name, productData[i].image, productData[i].rating, productData[i].price);
                        itemlength = document.querySelectorAll('.item').length
                    }
                }
            }
            element.classList.add('activated')


        }
        else {
            removeproducts();
            diplayingProducts()
            itemlength = document.querySelectorAll('.item').length
        }
    })
})











onload =()=>{
    document.getElementById('loader').style.visibility ='hidden';
}
