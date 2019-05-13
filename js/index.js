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

// Example: Update the img src for the logo


const navlist = document.querySelectorAll('.container header nav a');
const cta = document.querySelector('.cta');
//const mainContent = document.querySelector('.main-content');

//navlist.forEach(x => x.style.color = 'green');

let addNav1 = document.createElement('a');
addNav1.textContent = "Home";
let ded= document.querySelector('header nav').prepend(addNav1);

let addNav2 = document.createElement('a');
addNav2.textContent = "Blog";
let re= document.querySelector('header nav').appendChild(addNav2);







navlist[0].textContent = siteContent['nav']['nav-item-1'];
navlist[1].textContent = siteContent['nav']['nav-item-2'];
navlist[2].textContent = siteContent['nav']['nav-item-3'];
navlist[3].textContent = siteContent['nav']['nav-item-4'];
navlist[4].textContent = siteContent['nav']['nav-item-5'];
navlist[5].textContent = siteContent['nav']['nav-item-6'];

navlist.forEach(x => x.style.color = 'green');

let logo = document.querySelector("#logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

cta.querySelector('h1').textContent = siteContent['cta']['h1'];


let ctaButton = cta.querySelector('button');


ctaButton.textContent = siteContent['cta']['button'];
ctaButton.style.backgroundColor = 'green';
ctaButton.style.color = 'white';


let ctaImg = document.querySelector("#cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

let mainContent = document.querySelectorAll('div .text-content');

let mhb = document.querySelector('#middle-img')
mhb.setAttribute('src', siteContent['main-content']['middle-img-src']);

mainContent[0].childNodes[1].textContent = siteContent['main-content']['features-h4'];
mainContent[0].childNodes[3].textContent = siteContent['main-content']['features-content'];

mainContent[1].childNodes[1].textContent = siteContent['main-content']['about-h4'];
mainContent[1].childNodes[3].textContent = siteContent['main-content']['about-content'];

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
