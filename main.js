
// check local storage of color option 
let mainColor = localStorage.getItem("color_option");
if (mainColor !== null) {
    document.documentElement.style.setProperty('--main-color', mainColor);
}


// Get Array Of Imgs
let imgsArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];
let header = document.querySelector("header");
// Function To Randomize Imgs
function randomizeImgs() {

    backgroundInterval = setInterval(() => {

         // Get Random Number
        let randomNumber = Math.floor(Math.random() * imgsArray.length);
    
         // Change Background Image Url 
        header.style.backgroundImage = 'url("imgs/' + imgsArray[randomNumber] + '")';
    
    }, 10000);

}

randomizeImgs();

// switch colors
let colorsList = document.querySelectorAll('.colors-list li');

colorsList.forEach( el => {
    el.style.backgroundColor = el.dataset.color ;
});

colorsList.forEach(li =>{
    li.addEventListener('click', (e)=>{
        document.documentElement.style.setProperty("--main-color", e.target.dataset.color);
        localStorage.setItem("color_option", e.target.dataset.color);
    })
})

let bulletToggleBtn = document.querySelector('.bullets-toggle');
bulletToggleBtn.addEventListener('click', ()=>{
    document.querySelector('.bullets-toggle span').classList.toggle("active");
    document.querySelector('.bullets').classList.toggle("not-active");

})

let settingBoxBtn = document.querySelector(".setting-box i");
settingBoxBtn.addEventListener("click" , ()=>{
    document.querySelector(".setting-box").classList.toggle("active");
    // settingBoxBtn.classList.toggle("fa-spin");
})

// links button setting 
let linksBtn = document.querySelector(".links-button");
linksBtn.addEventListener('click', ()=>{
    linksBtn.classList.toggle("active-links-btn");
    document.querySelector('header .head-content ul').classList.toggle('active-links');
})

// create skills section 
let skillsArray = [["HTML", "80%"], ["CSS","70%"], ["JavaScript" , "90%"], ["Python" , "80%"], ["PHP", "90%"], ["MySql", "70%"]];

for (let i=0; i<skillsArray.length; i++) {
    let skillBox = document.createElement('div');
    skillBox.classList.add("skill-box");
    document.querySelector('.skills .container').appendChild(skillBox);
    //
    let skillName = document.createElement('div');
    skillName.classList.add('skill-name');
    skillName.textContent = skillsArray[i][0];
    skillBox.appendChild(skillName);
    //
    let skillProgress = document.createElement('div');
    skillProgress.classList.add('skill-progress');
    skillBox.appendChild(skillProgress);
    //
    let skillSpan = document.createElement('span');
    skillSpan.dataset.progress = skillsArray[i][1];
    skillProgress.appendChild(skillSpan);
    //
}
// Select Skills Selector
let ourSkills = document.querySelector(".skills");

window.onscroll = function () {

  // Skills Offset Top
    let skillsOffsetTop = ourSkills.offsetTop;

  // Skills Outer Height
    let skillsOuterHeight = ourSkills.offsetHeight;

  // Window Height
    let windowHeight = this.innerHeight+150;

  // Window ScrollTop
    let windowScrollTop = this.pageYOffset;

    if (windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)) {

        let allSkills = document.querySelectorAll(".skills .skill-box .skill-progress span ");

        allSkills.forEach(skill => {

            skill.style.width = skill.dataset.progress;

        });

    }


    // 
    let timelineContent = document.querySelector(".timeline");


  // timelineContent Offset Top
    let timeOffsetTop = timelineContent.offsetTop;

  // timelineContent Outer Height
    let timeOuterHeight = timelineContent.offsetHeight;

  // Window Height

  // Window ScrollTop

    if (windowScrollTop > (timeOffsetTop + timeOuterHeight - (windowHeight+500))) {
            // left
        let leftBoxes = document.querySelectorAll(".timeline-content .left");
        leftBoxes.forEach(el => {
            el.style.transform = "translateX(0%)";
        });
            // right
        let rightBoxes = document.querySelectorAll(".timeline-content .right");
        rightBoxes.forEach(el => {
            el.style.transform = "translateX(0%)";
        });

    }



};

// gallery imgs
let gallImgs = document.querySelectorAll('.gallery .imgs-box img');
gallImgs.forEach(img => {
    img.addEventListener("click", (el)=>{
        // create overlay
        let overlay = document.querySelector('.overlay');
        overlay.classList.add("active");
        // create the pop up
        let popupBox = document.createElement('div');
        popupBox.classList.add('popup-box');
        document.body.appendChild(popupBox);
        // the info
        let popupH3 =document.createElement('h3');
        popupH3.textContent = el.target.alt;
        popupBox.appendChild(popupH3);
        // the img
        let popupImg = document.createElement('img');
        popupImg.src = el.target.src ;
        popupBox.appendChild(popupImg);
        
        // the close btn
        let closeBtn = document.createElement("span");
        closeBtn.textContent = "X";
        closeBtn.classList.add("close-btn");
        popupBox.appendChild(closeBtn);

        // function for the close btn
        closeBtn.addEventListener("click" , ()=>{
            popupBox.remove();
            overlay.classList.remove('active');
        })

    })
})

// scrolling function for timeline section
// Select Skills Selector
