
var loginDivOne = document.querySelector("#cart-1");
loginDivOne.addEventListener('click',login);
var loginDiv = document.querySelector("#cart");

loginDiv.addEventListener('click', login);
document.querySelector(".minus-img").addEventListener('click', subtractProducts)
document.querySelector(".plus-img").addEventListener('click',addProducts)
document.querySelector(".btn-1").addEventListener('click',addToCart)
const cartList = document.querySelector(".cart-hover-details")
var itemsCountInCart = document.querySelector(".no-of-items")
var count = itemsCountInCart.textContent;
var totalProductPrice = document.querySelector(".cart-product-price")
var price = totalProductPrice.textContent;
var cartUponDiv = document.querySelector(".cart-upon-div");
var cartNumber = document.querySelector(".cart-number");


var noOfProducts = document.querySelector(".product-count")
var productCount = noOfProducts.textContent;
var cartEmptyDetails = document.querySelector(".cart-empty-details")
var logingHoverBox = document.querySelector(".login-hover")
var imgcart2delete = document.querySelector(".img-cart-2-delete")
imgcart2delete.addEventListener('click',deleteCartList)
var addToCartUpdateBtn = false;

function login() {
    logingHoverBox.style.display = "block";
    if(addToCartUpdateBtn == false){
        addToCartUpdateBtn=false;
        cartEmptyDetails.style.display = "block";
        cartList.style.display = "none";
    }
    else{
        // cartList.style.display = "flex";
        cartEmptyDetails.style.display = "none";
    }
}

document.body.addEventListener('click', function(event) {
    var targetElement = event.target; // Element clicked

    // Check if the clicked element is not the loginDiv
    if (targetElement !== loginDiv && targetElement !== loginDivOne && targetElement !== imgcart2delete) {
        // Close the loginDiv or hide it
        logingHoverBox.style.display = "none" // Change 'none' to the appropriate way to close the div
    }
});

function addProducts() {
        productCount++;
        noOfProducts.textContent = productCount;
        console.log(noOfProducts.textContent);
}

function subtractProducts() {

    if (productCount > 0) {
        productCount--;
        noOfProducts.textContent = productCount;
        console.log(noOfProducts.textContent);
    }
}
function addToCart(){
    if(productCount > 0){
        cartList.style.display ="flex";
        itemsCountInCart.textContent = productCount;
        totalProductPrice.textContent = "$"+125 * productCount+".00";
        cartNumber.textContent = productCount;
        cartUponDiv.style.display = "flex";
        addToCartUpdateBtn = true;
    }
}

function deleteCartList(){
    cartList.style.display = "none";
    cartEmptyDetails.style.display = "block";
    productCount = 0;
    addToCartUpdateBtn = false;
    noOfProducts.textContent = productCount;
    cartUponDiv.style.display = "none";
    cartNumber.textContent = productCount;
}
// ================================
// image-navigation-logic
var mainNavigatorPage = document.querySelector(".main-div-sneakers");

var closeBtn = document.querySelector("#close-btn");
closeBtn.addEventListener('click',()=>{
    mainNavigatorPage.style.display ="none";
})


var mainImage = document.querySelector("#img-3-2");


var imgId4 = document.querySelector("#img-4");
imgId4.addEventListener("click",()=>{
    mainNavigatorPage.style.display = "flex";
    // const currentImage = imgId4.getAttribute('src');
    mainImage.setAttribute('src',"./images/image-product-1.jpg");

})
var imgId4 = document.querySelector("#img-5");
imgId4.addEventListener("click",()=>{
    mainNavigatorPage.style.display = "flex";
    // const currentImage = imgId4.getAttribute('src');
    mainImage.setAttribute('src',"./images/image-product-2.jpg");

})
var imgId4 = document.querySelector("#img-6");
imgId4.addEventListener("click",()=>{
    mainNavigatorPage.style.display = "flex";
    // const currentImage = imgId4.getAttribute('src');
    mainImage.setAttribute('src',"./images/image-product-3.jpg");

})
var imgId4 = document.querySelector("#img-7");
imgId4.addEventListener("click",()=>{
    mainNavigatorPage.style.display = "flex";
    // const currentImage = imgId4.getAttribute('src');
    mainImage.setAttribute('src',"./images/image-product-4.jpg");

})
// ===========================sneakers in background blur state style modification===============
var imgId4 = document.querySelector("#img-4-2");
imgId4.addEventListener("click",()=>{
    mainNavigatorPage.style.display = "flex";
    mainImage.setAttribute('src',"./images/image-product-1.jpg");

})
var imgId4 = document.querySelector("#img-5-2");
imgId4.addEventListener("click",()=>{
    mainNavigatorPage.style.display = "flex";
    mainImage.setAttribute('src',"./images/image-product-2.jpg");

})
var imgId4 = document.querySelector("#img-6-2");
imgId4.addEventListener("click",()=>{
    mainNavigatorPage.style.display = "flex";
    mainImage.setAttribute('src',"./images/image-product-3.jpg");

})
var imgId4 = document.querySelector("#img-7-2");
imgId4.addEventListener("click",()=>{
    mainNavigatorPage.style.display = "flex";

    mainImage.setAttribute('src',"./images/image-product-4.jpg");

})
// ============================previous button next button logics==========
const images = ['./images/image-product-1.jpg', './images/image-product-2.jpg','./images/image-product-3.jpg','./images/image-product-4.jpg']; // Replace these with your image URLs

let currentIndex = 0; // Current index in the images array
const prevBtn = document.querySelector("#previous-btn");
const nextBtn = document.querySelector("#next-btn");

// Function to show the image based on the current index
function showImage() {
    mainImage.src = images[currentIndex];
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage();
});

// Initially show the first image
showImage();


// ============================image navigation for mobile version===============
const Mobimages = ['./images/image-product-1.jpg', './images/image-product-2.jpg','./images/image-product-3.jpg','./images/image-product-4.jpg']; // Replace these with your image URLs
var mobileMainImg = document.querySelector("#main-img");
let currentIndexMob = 0; // Current index in the images array
const prevBtnMob = document.querySelector("#previous-btn-mob");
const nextBtnMob = document.querySelector("#next-btn-mob");

// Function to show the image based on the current index
function showImageMob() {
    mobileMainImg.src = Mobimages[currentIndexMob];

}

prevBtnMob.addEventListener('click', () => {
    currentIndexMob = (currentIndexMob - 1 + Mobimages.length) % Mobimages.length;
    showImageMob();
});

nextBtnMob.addEventListener('click', () => {
    currentIndexMob = (currentIndexMob + 1) % Mobimages.length;
    showImageMob();
});

// Initially show the first image
showImageMob();
// =========================mobile slide bar===========
var mobileSlideBar = document.querySelector(".mobile-slide-bar")
var dressCollectionsBar = document.querySelector(".dress-collections-bar")
dressCollectionsBar.addEventListener('click',()=>{
    mobileSlideBar.style.display = "block";

})
var closeBtn = document.querySelector("#mob-close").addEventListener('click',()=>{
    mobileSlideBar.style.display = "none";

})