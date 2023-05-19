window.onload = function () {
    setTimeout("displayWelcome()", 2500);
  };

  function displayWelcome() {
    document.getElementById("delayed-welcome").style.visibility = "visible";
  }


function scrollToProjects() {
  const projectsDiv = document.getElementById("scroll");

  projectsDiv.scrollIntoView({behavior: "smooth"});
}

function scrollToContactMe() {
  const contactMeDiv = document.getElementById("scroll-contact-me");

  contactMeDiv.scrollIntoView({behavior: "smooth"});
}

//   Change text on card buttons
function changeText() {
    const button = document.querySelector(".btn-learn-more");
    const text = button.textContent;
    if(text == "Learn more") {
        // alert("hey");
        button.textContent = "Show less";
    } else {
        button.textContent = "Learn more";

    }

    
}

function changeTextWeb() {
  const button = document.querySelector(".web-button");
  const text = button.textContent;
  if(text == "Learn more") {
      button.textContent = "Show less";
  } else {
      button.textContent = "Learn more";
  }

}

function changeTextJava() {
  const button = document.querySelector(".java-button");
  const text = button.textContent;
  if(text == "Learn more") {
      button.textContent = "Show less";
  } else {
      button.textContent = "Learn more";
  }

}

function changeTextTank() {
  const button = document.querySelector(".tank-button");
  const text = button.textContent;
  if(text == "Learn more") {
      button.textContent = "Show less";
  } else {
      button.textContent = "Learn more";
  }

}