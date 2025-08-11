// References to DOM Elements
const prevBtn = document.querySelector("#previous-button");
const nextBtn = document.querySelector("#next-button");
const book = document.querySelector("#book");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");

// Event Listener
prevBtn.addEventListener("click", goProjectsSpread);
nextBtn.addEventListener("click", goSkillsSpread);

// Business Logic
let currentLocation = 1;
let numOfPapers = 3;
let maxLocation = numOfPapers + 1;

function openBook() {
    book.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(180px)";
    nextBtn.style.transform = "translateX(180px)";
}

function closeBook(isAtBeginning) {
    if(isAtBeginning) {
        book.style.transform = "translateX(0%)";
    } else {
        book.style.transform = "translateX(100%)";
    }
    
    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
}

function goNextPage() {
    if(currentLocation < maxLocation) {
        switch(currentLocation) {
            case 1:
                openBook();
                paper1.classList.add("flipped");
                paper1.style.zIndex = 1;
                currentLocation = 2;
                break;
            case 2:
                paper2.classList.add("flipped");
                paper2.style.zIndex = 2;
                currentLocation = 3;
                break;
            case 3:
                paper3.classList.add("flipped");
                paper3.style.zIndex = 3;
                currentLocation = 4;
                closeBook(false);
                break;
            default:
                throw new Error("unkown state");
        }
    }
}

function goPrevPage() {
    if(currentLocation > 1) {
        switch(currentLocation) {
            case 2:
                closeBook(true);
                paper1.classList.remove("flipped");
                paper1.style.zIndex = 3;
                currentLocation = 1;
                break;
            case 3:
                paper2.classList.remove("flipped");
                paper2.style.zIndex = 2;
                currentLocation = 2;
                break;
            case 4:
                openBook();
                paper3.classList.remove("flipped");
                paper3.style.zIndex = 1;
                currentLocation =3;
                break;
            default:
                throw new Error("unkown state");
        }
    }
}

function withoutAnimation(elements, fn) {
  elements.forEach(el => el.style.setProperty('transition', 'none', 'important'));
  document.body.offsetWidth; // reflow
  fn();
  document.body.offsetWidth; // commit
  elements.forEach(el => el.style.removeProperty('transition'));
}

// Jump straight to: Back 1 + Front 2
function goSkillsSpread() {
  if (currentLocation === 3) {
    paper1.classList.add("flipped");
    paper2.classList.remove("flipped");
    return;
  } 
    openBook();
    // flip state for location = 2
    paper1.classList.add("flipped");
    currentLocation = 2;
}

// Jump straight to: Back 2 + Front 3
function goProjectsSpread() {

  if (currentLocation === 3) {
    paper2.classList.add("flipped");
    return;
  } 
  paper2.classList.add("flipped");
    paper2.style.zIndex = 3;
    paper3.style.zIndex = 2;
    paper1.style.zIndex = 1;

    openBook();
    currentLocation = 3;

}