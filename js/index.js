const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// IMages
let logo = document.querySelector("#logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let ctaImg = document.querySelector("#cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

let mhb = document.querySelector('#middle-img')
mhb.setAttribute('src', siteContent['main-content']['middle-img-src']);


//Nav Area


const navlist = document.querySelectorAll('.container header nav a');
navlist.forEach( (items, i) =>{
  items.textContent = siteContent['nav'][`nav-item-${i + 1}`];
})



const cta = document.querySelector('.cta');
cta.querySelector('h1').textContent = siteContent['cta']['h1'];

//target button
let ctaButton = cta.querySelector('button');


ctaButton.textContent = siteContent['cta']['button'];
ctaButton.style.backgroundColor = 'green';
ctaButton.style.color = 'white';



let mainContent = document.querySelectorAll('div .text-content');
mainContent[0].childNodes[1].textContent = siteContent['main-content']['features-h4'];
mainContent[0].childNodes[3].textContent = siteContent['main-content']['features-content'];

mainContent[1].children[0].textContent = siteContent['main-content']['about-h4'];
mainContent[1].children[1].textContent = siteContent['main-content']['about-content'];

mainContent[2].childNodes[1].textContent = siteContent['main-content']['services-h4'];
mainContent[2].childNodes[3].textContent = siteContent['main-content']['services-content'];

mainContent[3].childNodes[1].textContent = siteContent['main-content']['product-h4'];
mainContent[3].childNodes[3].textContent = siteContent['main-content']['product-content'];

mainContent[4].childNodes[1].textContent = siteContent['main-content']['vision-h4'];
mainContent[4].childNodes[3].textContent = siteContent['main-content']['vision-content'];



let contact = document.querySelector('.contact');
contact.childNodes[1].textContent = siteContent['contact']['contact-h4'];
contact.childNodes[3].textContent = siteContent['contact']['address'];
contact.childNodes[5].textContent = siteContent['contact']['phone'];
contact.childNodes[7].textContent = siteContent['contact']['email'];

let footer = document.querySelector('footer');
footer.querySelector('p').textContent = siteContent['footer']['copyright'];




//Stretch Goals
//      Nav Area Create Navs
let addNav2 = document.createElement('a');
addNav2.textContent = "Blog";
let re= document.querySelector('header nav').appendChild(addNav2);



let addNav1 = document.createElement('a');
addNav1.textContent = "Home";
let ded= document.querySelector('header nav').prepend(addNav1);

let newnavlist = document.querySelectorAll('.container header nav a').forEach(x => x.style.color = 'green');

//change button on click event
ctaButton.addEventListener('click',  changeColor);
function changeColor(){
  let targetColor = this.style;
    targetColor.backgroundColor == 'green' ?
      targetColor.cssText += 'background-color:red; color:orange;' :
         targetColor.cssText += 'background-color:green; color:white;'
}