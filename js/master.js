//Check If Theres Local Storage Color Option
let mainColors = localStorage.getItem("color_option");

if ( mainColors !== null ){

//console.log('local storage is not empty you can set it on root now');
//console.log(localStorage.getItem("color_option"));

document.documentElement.style.setProperty('--main-color',localStorage.getItem("color_option"));

    //Remove Active Class From All Colors List Ietem
    document.querySelectorAll(".colors-list li").forEach(element =>{

        element.classList.remove("active");

         //Add Active Class On Elements With Data-colors == Local storage Item
        if(element.dataset.color === mainColors){

        // Add Active Class
        element.classList.add("active");

        }
        
            });

};


// Randoom background Option
let backgroundOption = true;

// Variable To Control The background Interval
let backgroundInterval;

//cheak if there local storage random background item
let backgroundLocalItem = localStorage.getItem("background_option");

// cheak if randoom background local srorage is not empty
if (backgroundLocalItem !== null) {


if (backgroundLocalItem === 'true') {
backgroundOption = true;

} else {
backgroundOption = false;

}
// remove active class from all spans
document.querySelectorAll(".random-backgrounds span ").forEach(element => {

    element.classList.remove("active");
    
    });

    if (backgroundLocalItem === 'true') {
    
        document.querySelector(".random-backgrounds .yes").classList.add("active");
    
    } else{
    
        document.querySelector(".random-backgrounds .no").classList.add("active");
    }
    

}

// click On toggle setting gear
document.querySelector(".toggle-settings .fa-gear").onclick = function () {


//Toggle Class Fa-spin For Rotation on Self
    this.classList.toggle("fa-spin");

//Toggle Class Open On Main Setting Box  
    document.querySelector(".settings-box").classList.toggle("open");
};


//Switch Color
const colorsli = document.querySelectorAll(".colors-list li");


//Loop On All List Items
colorsli.forEach(li => {

    //Click On Every List Ietems
li.addEventListener("click", (e) => {

    //Set Color On Root
    document.documentElement.style.setProperty('--main-color', e.target.dataset.color);

    // Set COlor on local storage
    localStorage.setItem("color_option", e.target.dataset.color);

    //Remove Active Class From All Chiledrens
    e.target.parentElement.querySelectorAll(".active").forEach(element =>{

element.classList.remove("active");

    });

    //Add Active Class On Self
    e.target.classList.add("active");

});

});


//Switch randdom Background
const randomBackEl = document.querySelectorAll(".random-backgrounds span");


//Loop On All Spans
randomBackEl.forEach(span => {

    //Click On Every span
    span.addEventListener("click", (e) => {

    //Remove Active Class From All Chiledrens
    e.target.parentElement.querySelectorAll(".active").forEach(element => {

    element.classList.remove("active");

    });


    //Add Active Class On Self
    e.target.classList.add("active");

    if (e.target.dataset.background === 'yes') {
    
        backgroundOption = true;
        randdomizeImgs();
        localStorage.setItem("background_option", true);
        

    } else {

    backgroundOption = false;
    clearInterval(backgroundInterval);
    localStorage.setItem("background_option", false);
    
    }
});

});


// Select Landing Page Element
let LandingPage = document.querySelector(".landing-page");

//Get Array Of Images
let ImagesArray = ["img1.jpg" , "img3.jpg" , "img4.jpg" , "img19.jpg"]

// Function To Randoom Imgs
function randdomizeImgs() {

    if (backgroundOption === true ) {

        backgroundInterval = setInterval(()=> {

            //Get Random number
            let randomNumber = Math.floor(Math.random() * ImagesArray.length);
            
            //Ghange Background Image Url
            LandingPage.style.backgroundImage = 'url("images/' +  ImagesArray[randomNumber]+'")';
            
            }, 1000);
            
    }
}

randdomizeImgs();



// select Skills Selctor
let ourSkills = document.querySelector(".skills");

window.onscroll = function () {

    //skills Offset Top
    let skillsOffsetTop = ourSkills.offsetTop;

    // Skills  Outer Height
    let skillsOuterHeight = ourSkills.offsetHeight;

    //window Height
    let windowHeight = this.innerHeight;

    //window ScrollTop
    let windowScrollTop = this.pageYOffset;

    if (windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)) {

        let allSkills = document.querySelectorAll(".skill-box .skill-progress span");

        allSkills.forEach(skill => {

        skill.style.width = skill.dataset.progress;

        });
    }
};


// Creat Popup With The Image 
let ourGallery = document.querySelectorAll(".gallery img");

    ourGallery.forEach(img => {
    
    img.addEventListener('click', (e) => {
        // Creat Overlay Element
    let overlay = document.createElement("div");

    // Add Class To Overlay
    overlay.className = 'popup-overlay';

    //Append Overlay To The Body
    document.body.appendChild(overlay);

    // Creat The Popup Box
    let popupBox = document.createElement("div");

    // Add Class To The Popup Box
    popupBox.className = 'popup-box';

    if (img.alt !== null) {

        //Creat Heading
        let imgHeading = document.createElement("h3");

        // Creat text For Heading
        let imgText = document.createTextNode(img.alt);

        //Append  The Text To The Heading
        imgHeading.appendChild(imgText);

        // Append The Heading To The Popup Box
        popupBox.appendChild(imgHeading);

    }

    // Creat The images
    let popupImage = document.createElement("img");

    // Set Image Source
    popupImage.src = img.src;

    // Add Image To Popup Box
    popupBox.appendChild(popupImage);
    
    // Append  The  Popup Box to Body
    document.body.appendChild(popupBox);

    // Creat The Close Span
    let.closeButton = document.createElement("span");

    // Creat The Close Button Text
    let closeButtonText = document.createTextNode("x");

    // Append  Text To Close Button
    closeButton.appendChild(closeButtonText);

    // Add  Class To Close  Button
    closeButton.className = 'close-button';

    // Add  Close Button To The Popup Box
    popupBox.appendChild(closeButton);
    

    });
});

// Close Popup 
document.addEventListener("click", function (e) {

    if (e.target.className == 'close-button') {

    // Remove  The Cureent Popup
    e.target.parentNode.remove();

    // Remove Overlay
    document.querySelector(".popup-overlay").remove();

    }

});

// Select All Bullets
const allBullets = document.querySelectorAll(".nav-bullets .bullet");

// Select All Links
const allLinks = document.querySelectorAll(".links a");

function scrollToSomewhere(elements) {
    
    elements.forEach(ele => {

        ele.addEventListener("click", (e) => {

            e.preventDefault();

            document.querySelector(e.target.dataset.section).scrollIntoView({

                behavior: 'smooth'

            });

        });

    });

}

scrollToSomewhere(allBullets);
scrollToSomewhere(allLinks);


// Handle Active  State
function handleActive(ev) {

    // Remove Active Class From All Childrens
    ev.target.parentElement.querySelectorAll(".active").forEach(element => {

        element.classList.remove("active");
    });

    // Add Active Class On Self
    ev.target.classList.add("active");
}



let bulletsSpan = document.querySelectorAll(".bullets-option span");

let bulletsContainer = document.querySelector(".nav-bullets");

let bulletLocalItem = localStorage.getItem("bullets-option");

if (bulletLocalItem !== null) {

    bulletsSpan.forEach(span => {

        span.classList.remove("active");



    });

    if (bulletLocalItem === 'block') {

        bulletsContainer.style.display = 'block';

        document.querySelector(".bullets-option .yes").classList.add("active");

    } else {

        bulletsContainer.style.display = 'none';

        document.querySelector(".bullets-option .no").classList.add("active");
    }

}


bulletsSpan.forEach(span => {
    
    span.addEventListener("click", (e) => {

        if (span.dataset.display === 'show') {


            bulletsContainer.style.display = 'block';

            localStorage.setItem("bullets-option", 'block');

        } else {

            bulletsContainer.style.display = 'none';
            
            localStorage.setItem("bullets_option", 'none');

        }

        handleActive(e);
    });
});


// Reset Button
document.querySelector(".reset-options").onclick = function () {

    //localStorage.clear();

    localStorage.removeItem("color_option");
    localStorage.removeItem("background_option");
    localStorage.removeItem("bullets_option");


    window.location.reload();

}


// Toggle mnue
let toggleBtn = document.querySelector(".toggle-menu");
let tlinks = document.querySelector(".links");

toggleBtn.onclick = function (e) {

    // Stop Propagation
    e.stopPropagation()

    //  Toggle  Class "menu=active" On Active
    this.classList.toggle("menu-active");

    // Toggle  Class "open" on Links
    tlinks.classList.toggle("open");
};

// Click AnyWhere Outside Menu And Toggle  Button
document.addEventListener("click", (e) => {

    if (e.target !== toggleBtn && e.target !== tlinks) {

        if (tlinks.classList.contains("open")) {

    //  Toggle  Class "menu=active" On Active
    toggleBtn.classList.toggle("menu-active");

    // Toggle  Class "open" on Links
    tlinks.classList.toggle("open");


        }

        console.log("This Is Not  The Button And Not The Menu")

    }
});

// Stop Propagation On Menu
tlinks.onclick = function (e) {
    e.stopPropagation();
}

