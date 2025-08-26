// References to DOM Elements
const skillsBtn = document.querySelector("#skills-button");
const mainBtn = document.querySelector("#main-button");
const book = document.querySelector("#book");
const projectsBtn = document.querySelector("#projects-button");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");
const paper4 = document.querySelector("#p4");

// Event Listener
skillsBtn.addEventListener("click", goSkillsSpread);
mainBtn.addEventListener("click", goMainSpread);
projectsBtn.addEventListener("click", goProjectsSpread);

// Business Logic
let currentLocation = 1;
let numOfPapers = 4;
let maxLocation = numOfPapers + 1;

function openBook() {
    book.style.transform = "translateX(50%)";
    skillsBtn.style.transform = "translateX(180px)";
    mainBtn.style.transform = "translateX(180px)";
    projectsBtn.style.transform = "translateX(180px)";
}

function closeBook(isAtBeginning) {
    if(isAtBeginning) {
        book.style.transform = "translateX(0%)";
    } else {
        book.style.transform = "translateX(100%)";
    }
    
    skillsBtn.style.transform = "translateX(0px)";
    mainBtn.style.transform = "translateX(0px)";
    projectBtn.style.transform = "translateX(0px)";
}


function goMainSpread() {

    //from skills to main 
    if (currentLocation === 3) {
    paper1.classList.add("flipped");
    paper2.classList.remove("flipped");
    paper1.style.zIndex = 3;
    currentLocation = 2;
    } 
    //from projects to main 
    if (currentLocation === 4) {
    paper3.style.zIndex = 2;
    paper1.style.zIndex = 3;

    paper3.classList.add("flipped");
    paper2.classList.remove("flipped");
    
    currentLocation = 2;
    }

    paper1.classList.add("flipped");
    currentLocation = 2;
}

function goSkillsSpread() {

    //from projects to skills
  if (currentLocation === 4) {
    paper3.classList.remove("no-transition");
    paper3.classList.remove("flipped");
    paper2.style.zIndex = 2;
    paper3.style.zIndex = 3;
    paper1.style.zIndex = 1;
    currentLocation = 3;
  } 
  
  //from main to skills
  if (currentLocation === 2) {
    paper3.classList.add("no-transition");
    paper3.classList.remove("flipped");

  }

    paper2.classList.add("flipped");
    paper2.style.zIndex = 3;
    paper3.style.zIndex = 2;
    paper1.style.zIndex = 1;

    openBook();
    currentLocation = 3;
}

function goProjectsSpread() {

//from skills to projects
  if (currentLocation === 3) {
    paper3.classList.remove("no-transition");
    paper3.classList.add("flipped");
    paper2.style.zIndex = 2;
    paper3.style.zIndex = 3;
    paper1.style.zIndex = 1;
  } 
//from main to projects
  if (currentLocation === 2) {
    paper2.classList.add("flipped");
    paper3.classList.add("flipped");
    paper2.style.zIndex = 2;
    paper3.style.zIndex = 3;
    paper1.style.zIndex = 1;
  }

  paper3.classList.add("flipped");
    paper2.style.zIndex = 2;
    paper3.style.zIndex = 3;
    paper1.style.zIndex = 1;

    openBook();
    currentLocation = 4;

}

window.onload = () => {
  openBook();
  goMainSpread();
};