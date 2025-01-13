


  //  let  products2 = fetch('https://script.googleusercontent.com/macros/echo?user_content_key=XGdZgX2QYkF0cdZDwtqvuam7IeagRj2143aPI57vBjlIyH6rOJ-gU531NhtpZ4i2EQWXNURgPorbBsMsr2CjmnCDtO4eNHFmm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnDrZ8O7MAg-5KbnzcrOJWT8XJ7TnGHvTgoAfVfC6y-AfVzFrH7ErXKuZ9JofhzlrSzEt4TBQf1pnlsROCSsKQPk9jVrEwJWo5dz9Jw9Md8uu&lib=MJdJZ8BVRodC6LGgDL8myo2G2k8q_2nFP').then(res=> {return res.json()}).then(res=>console.log(res))
  function productPageLinkGenerator(productName) {
    let productLink = `./secondaryResources/htmlPageTemplates/backSupportBelt.html?selectedProductTitle=${`${productName}`}`
    console.log(productLink,productName)
    return productLink; // Dynamic link for each product
}
    // Create loader element
    const loader = document.createElement('div');
    loader.className = 'loader';
    loader.innerHTML = `
        <div class="loadingSpinner">
            <div class="innerSpinner"></div>
        </div>
        <div>Loading...</div>
    `;

    // Append loader to the container
    const container = document.getElementById('container');
    // container.appendChild(loader);
  // Function to show messages
function showMessage(message, type) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
    messageDiv.className = `message visible ${type}`;

    // Create close button
    const closeButton = document.createElement('span');
    closeButton.textContent = '✖';
    closeButton.className = 'close-btn';
    closeButton.onclick = function() {
        messageDiv.className = 'message hidden';
    };

    messageDiv.appendChild(closeButton);

    // Automatically hide the message after 20 seconds
    setTimeout(() => {
        messageDiv.className = 'message hidden';
    }, 20000);
}

    // Sample data to simulate fetching from a server
    //          const products = [
    // {
    //     title: "Back Support Belt",
    //     description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    //     images: [
    //       "https://picsum.photos/202?random=1",
    //       "https://picsum.photos/202?random=2",
    //       "https://picsum.photos/202?random=3"
    //     ]
    //   },
    //   {
    //     title: "Back Support Belt 2",
    //     description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    //     images: [
    //       "https://picsum.photos/202?random=4",
    //       "https://picsum.photos/202?random=5",
    //       "https://picsum.photos/202?random=6"
    //     ]
    //   },      {
    //     title: "Back Support Belt",
    //     description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    //     images: [
    //       "https://picsum.photos/202?random=1",
    //       "https://picsum.photos/202?random=2",
    //       "https://picsum.photos/202?random=3"
    //     ]
    //   },
    //   {
    //     title: "Back Support Belt 2",
    //     description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    //     images: [
    //       "https://picsum.photos/202?random=4",
    //       "https://picsum.photos/202?random=5",
    //       "https://picsum.photos/202?random=6"
    //     ]
    //   },      {
    //     title: "Back Support Belt",
    //     description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    //     images: [
    //       "https://picsum.photos/202?random=1",
    //       "https://picsum.photos/202?random=2",
    //       "https://picsum.photos/202?random=3"
    //     ]
    //   },
    //   {
    //     title: "Back Support Belt 2",
    //     description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    //     images: [
    //       "https://picsum.photos/202?random=4",
    //       "https://picsum.photos/202?random=5",
    //       "https://picsum.photos/202?random=6"
    //     ]
    //   },
    //   {
    //     title: "Back Support Belt 3",
    //     description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    //     images: [
    //       "https://picsum.photos/202?random=7",
    //       "https://picsum.photos/202?random=8",
    //       "https://picsum.photos/202?random=9"
    //     ]
    //   }
    //   // Add more products as needed
    // ];
    let header=[];
    let products = [];
    const productCount = 9; // Number of products to create
    // Function to create slides dynamically

    function createSlides() {
      const slidesContainer = document.querySelector('.slidesContainer');
      slidesContainer.innerHTML = ''; // Clear existing content

      products.forEach(product => {
        const slide = `
                    <div class="slides">
                        <div class="slideContent">
                            <h1>${product.productName}</h1>
                            <p>${product.priceWithoutDiscount} from 1% to 10% Discount Luck </p>
                            <div class="imgWrapper">
                                ${product.productImageLinks.map((img, index) => `
                                    <img src="${img}" alt="" class="slideImage" style="--imgNo:${index + 1};" />
                                `).join('')}
                            </div>
                             <a class="buyNow" href="${productPageLinkGenerator(product.productName)}">
                <button class="button">
                <span class="label">Order Now</span>
                <span class="gradient-container">
                  <span class="gradient"></span>
                </span>
              </button>
            </a>
                        </div>
                    </div>
                `;
        slidesContainer.innerHTML += slide; // Append the new slide
      });
    }
    // Function to create product links dynamically
    function createProducts() {
      const productsContainer = document.querySelector('.productsContainer');
      productsContainer.innerHTML = ''; // Clear existing content

      products.forEach(product => {
        const productHTML = `
                    <a class="productContainer" href="${productPageLinkGenerator(product.productName)}">
                        <div class="priceTag">${product.priceWithoutDiscount}</div>
                        <img src="${product.productImageLinks[0]}" alt="${product.productName}" class="productImage" />
                        <span class="productTitle">${product.productName}<div class="freeDelivery">Free Delivery</div></span>
                        <p class="productDescription">${product.productDescriptions}</p>
                            <div class="productBrandContainer">
      <img src="${product.productBrandImage}" alt="${product.productBrandName}" class="productBrandLogo">
          <div class="productBrandName">${product.productBrandName}</div>
    </div>
                    </a>
                `;
        productsContainer.innerHTML += productHTML; // Append the new product
      });
    }
    document.querySelector('.slidesContainer').innerHTML=""
    document.querySelector('.slidesContainer').appendChild(loader)
    ;
  
    // Fetch products
    function fetchProducts() {
        if (!localStorage.getItem('productsData')) {
    fetch('https://script.google.com/macros/s/AKfycbyVmhEeVEemjYlflXvRndoz_eGJ2eE0t-yCD9GYTbBpp65B-mIjllqhhNacO7rC-0CW1Q/exec')
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then(data => {
            console.log(data);
            // showMessage('Products loaded successfully!', 'success');
            header=data.data.shift();
            products=data.data;
            products = products.filter(product => product.displayProduct)
    //   let productsData=JSON.stringify(products)
      localStorage.setItem("productsData",JSON.stringify(products))
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            for (let i = 1; i <= productCount; i++) {
    //   products.push({
    //     productName: `Back Support Belt ${i}`,
    //     productDescriptions: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    //     productImageLinks: [
    //       "https://i.ibb.co/7GsQSdm/posture-Corrector-Belt-Image1.png",
    //       "https://i.ibb.co/7GsQSdm/posture-Corrector-Belt-Image1.png",
    //       `https://picsum.photos/202?random=${i * 3 - 2}`,
    //       `https://picsum.photos/202?random=${i * 3 - 1}`,
    //       `https://picsum.photos/202?random=${i * 3}`
    //     ],
    //     priceWithDiscount: 1500 + (i * 100), // Increment price for each product
    //     priceWithoutDiscount: 1700 + (i * 100), // Increment original price for each product
    //     link: `./secondaryResources/htmlPageTemplates/backSupportBelt.html?selectedProductTitle=${`Back Support Belt ${i}`}`, // Dynamic link for each product
    //     productCategory: "Health",
    //     productBrandName:"ARTees",
    //     productBrandImage:"./secondaryResources/Logo.png"
    //   });
    }
    products = [{availability: "InStock",
        displayProduct: true,
        priceWithDiscount: 1350,
        priceWithoutDiscount: 1500,
        productBrandImage: "https://i.ibb.co/qjwWk3B/Imperial-Orthotics-brand-Logo.jpg",
        productBrandName: "Imperial Orthotics ",
        productCategory: "Health/Fitness",
        productDescriptions: "posture corrector belt Or back support belt a very helpful product that can help you with everyday pain relief it can help you in maintaining a good posture and a stable routine it can easily be used or wear during any kind of work like programming running sitting cooking for daily work task well for my personal opinion wearing it for about 1 to 2 hours is enough"
        ,productId: "130125BIO",
        productImageLinks: (2) ['https://i.ibb.co/X2MbYT0/Posture-corrector-belt.jpg', 'https://i.ibb.co/KDdFDxh/Posture-corrector-belt.jpg']
        ,productName: "Back Support Belt"
        ,productPriceAffectingSpecifitaion: ""
        ,productSpecifications: []
        ,productType: "Belt/wearable"
        ,realPrice: 1250},{
            availability: "InStock",
displayProduct: true
,priceWithDiscount: 2160
,priceWithoutDiscount: 2400
,productBrandImage: "https://i.ibb.co/XDcn5Lf/ARTees-Brand-Logo.png"
,productBrandName: "AR tees "
,productCategory: "Fashion "
,productDescriptions: "Double Fleece Hoodie with 320 + gsm and bold dtf print /n Clothes Premium double fleece fabric h with 320 + gsm (mtlb sardi ki chutti) aur print dtf print hota h jo 50 60 wash tk bhi nh utarta /n Custom designs available"
,productId: "130125HAT"
,productImageLinks: (7) ['https://i.ibb.co/jy57pDw/ARTees-Hoodies.jpg', 'https://i.ibb.co/CmcJZCd/ARTees-Hoodies.jpg', 'https://i.ibb.co/NS78yWc/ARTees-Hoodies.jpg', 'https://i.ibb.co/VvmdLHK/ARTees-Hoodies.png', 'https://i.ibb.co/m5jqCZ3/ARTees-Hoodies.jpg', 'https://i.ibb.co/CwRt7LK/ARTees-Image.jpg', 'https://i.ibb.co/YDV4vf6/ARTees-Image.jpg']
,productName: "ARTees Hodie"
,productPriceAffectingSpecifitaion: ""
,productSpecifications: []
,productType: "clothes/Wearable"
,realPrice: 2000
        },{
            availability: "InStock"
,displayProduct: true
,priceWithDiscount: 2700
,priceWithoutDiscount: 3000
,productBrandImage: "https://i.ibb.co/5hB3fkZ/Al-Maktab-Honey-brand-Logo.png"
,productBrandName: "Al Maktab "
,productCategory: "Food"
,productDescriptions: "Al-Maktab promises pure and real honey, Best for everyone in a reliable price "
,productId: "130125AMH"
,productImageLinks: (3) ['https://i.ibb.co/KXNV65q/Al-maktab-Honey.jpg', 'https://i.ibb.co/WHy444k/Al-maktab-Honey.jpg', 'https://i.ibb.co/MsFPJQv/Al-Maktab-Honey.jpg']
,productName: "Al Maktab Honey"
,productPriceAffectingSpecifitaion: "weight:\"2000/1000\""
,productSpecifications: []
,productType: "Food/Storable/Eatable ",
realPrice: 2500
        },{availability: "InStock",
            displayProduct: true,
            priceWithDiscount: 1350,
            priceWithoutDiscount: 1500,
            productBrandImage: "https://i.ibb.co/qjwWk3B/Imperial-Orthotics-brand-Logo.jpg",
            productBrandName: "Imperial Orthotics ",
            productCategory: "Health/Fitness",
            productDescriptions: "posture corrector belt Or back support belt a very helpful product that can help you with everyday pain relief it can help you in maintaining a good posture and a stable routine it can easily be used or wear during any kind of work like programming running sitting cooking for daily work task well for my personal opinion wearing it for about 1 to 2 hours is enough"
            ,productId: "130125BIO",
            productImageLinks: (2) ['https://i.ibb.co/X2MbYT0/Posture-corrector-belt.jpg', 'https://i.ibb.co/KDdFDxh/Posture-corrector-belt.jpg']
            ,productName: "Back Support Belt"
            ,productPriceAffectingSpecifitaion: ""
            ,productSpecifications: []
            ,productType: "Belt/wearable"
            ,realPrice: 1250},{
                availability: "InStock",
    displayProduct: true
    ,priceWithDiscount: 2160
    ,priceWithoutDiscount: 2400
    ,productBrandImage: "https://i.ibb.co/XDcn5Lf/ARTees-Brand-Logo.png"
    ,productBrandName: "AR tees "
    ,productCategory: "Fashion "
    ,productDescriptions: "Double Fleece Hoodie with 320 + gsm and bold dtf print /n Clothes Premium double fleece fabric h with 320 + gsm (mtlb sardi ki chutti) aur print dtf print hota h jo 50 60 wash tk bhi nh utarta /n Custom designs available"
    ,productId: "130125HAT"
    ,productImageLinks: (7) ['https://i.ibb.co/jy57pDw/ARTees-Hoodies.jpg', 'https://i.ibb.co/CmcJZCd/ARTees-Hoodies.jpg', 'https://i.ibb.co/NS78yWc/ARTees-Hoodies.jpg', 'https://i.ibb.co/VvmdLHK/ARTees-Hoodies.png', 'https://i.ibb.co/m5jqCZ3/ARTees-Hoodies.jpg', 'https://i.ibb.co/CwRt7LK/ARTees-Image.jpg', 'https://i.ibb.co/YDV4vf6/ARTees-Image.jpg']
    ,productName: "ARTees Hodie"
    ,productPriceAffectingSpecifitaion: ""
    ,productSpecifications: []
    ,productType: "clothes/Wearable"
    ,realPrice: 2000
            },{
                availability: "InStock"
    ,displayProduct: true
    ,priceWithDiscount: 2700
    ,priceWithoutDiscount: 3000
    ,productBrandImage: "https://i.ibb.co/5hB3fkZ/Al-Maktab-Honey-brand-Logo.png"
    ,productBrandName: "Al Maktab "
    ,productCategory: "Food"
    ,productDescriptions: "Al-Maktab promises pure and real honey, Best for everyone in a reliable price "
    ,productId: "130125AMH"
    ,productImageLinks: (3) ['https://i.ibb.co/KXNV65q/Al-maktab-Honey.jpg', 'https://i.ibb.co/WHy444k/Al-maktab-Honey.jpg', 'https://i.ibb.co/MsFPJQv/Al-Maktab-Honey.jpg']
    ,productName: "Al Maktab Honey"
    ,productPriceAffectingSpecifitaion: "weight:\"2000/1000\""
    ,productSpecifications: []
    ,productType: "Food/Storable/Eatable ",
    realPrice: 2500
            }]
            // showMessage('Failed to load products. Please try again later.', 'error');
        })
        .finally(() => {
            // Remove loader after fetch completes
            // document.querySelector('.slidesContainer').removeChild(loader);
            createSlides()
            updateOnclick()
            createProducts()
        });
    }else{
        products = JSON.parse(localStorage.getItem('productsData'))
        products = products.filter(product => product.displayProduct)

        createSlides()
        updateOnclick()
        createProducts()
    }}

fetchProducts()
    // 0: "productName"
// 1: "productBrandName"
// 2: "productBrandImage"
// 3: "productDescriptions"
// 4: "productCategory"
// 5: "productType"
// 6: "realPrice"
// 7: "priceWithoutDiscount"
// 8: "priceWithDiscount (10%~max)"
// 9: "productSpecifications"
// 10: "productImageLinks"
// 11: "productId"
// 12: "availability"
// 13: "displayProduct"
    // 

    // Call the function to create products after the DOM is fully loaded
    // document.addEventListener('DOMContentLoaded', createProducts);

    // Call the function to create slides after the DOM is fully loaded
    // document.addEventListener('DOMContentLoaded', createSlides);








let slidesContainer = document.querySelector(".slidesContainer")
function next() {
let slides = document.querySelectorAll(".slides");
    slidesContainer.appendChild(slides[0])
    updateOnclick()
    // console.log("next")
}
function prev(){
    slides = document.querySelectorAll(".slides");
    slidesContainer.prepend(slides[slides.length-1])
    updateOnclick()
    // console.log("prev")


}
function updateOnclick(slides = document.querySelectorAll(".slides")){
    slides.forEach(slide => {
        slide.removeEventListener('click',next)
        slide.removeEventListener('click',prev)
    });
slides[0].addEventListener('click',prev)
slides[1].addEventListener('click',prev)
// slides[2].addEventListener('click',prev)
// slides[1].addEventListener('click',next)
// slides[2].addEventListener('click',next)
// slides[3].addEventListener('click',next)
slides[3].addEventListener('click',next)
slides[4].addEventListener('click',next)
slides[slides.length-1].addEventListener('click',prev)
// slides[slides.length-2].addEventListener('click',next)
// slides[slides.length-3].addEventListener('click',next)
}
// createSlides()
// updateOnclick()
// setInterval(next, 10000);

