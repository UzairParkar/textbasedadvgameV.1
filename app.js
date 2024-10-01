const frames = [
`C`,`Click`,`Click Me`,``,`Click Me To`,`Click Me To Play`,``,`Click Me To Play`,``,`Click Me To Play`,``,`Click Me To Play`,``,
]
let currentFrame = 0;
    const asciiElement = document.getElementById('title')
    asciiElement.classList.add = `title`;

    function animateASCIIArt() {
        asciiElement.textContent = frames[currentFrame];
        currentFrame = (currentFrame + 1) % frames.length;
    }

    setInterval(animateASCIIArt, 500);

function begin(){
    document.getElementById('title').style.color = "yellowgreen"
    document.getElementById('Wrapper').style.backgroundColor = 'black'
    document.getElementById('H1').style.color = "yellowgreen"
    document.getElementById('Wrapper').style.borderColor = 'yellowgreen'
    document.getElementById('title').style.display = "none"
    document.getElementById('title').style.border = "none"
    document.getElementById('TitleOne').style.display = "block"
}
 function sceneshow(){
    section = document.getElementsByClassName("sceneone")  
for (let i=0;i<section.length;i++){
    section[i].style.display = "block"
}
section2 = document.getElementById('sceneonetitle')
section2.style.display = "block"

section3 = document.getElementById("empty1")
section3.style.display = "block"
section4= document.getElementById("empty2")
section4.style.display = "block"
section5 = document.getElementById("empty3")
section5.style.display = "block"
 }
  function showstrydetective(){
    detective_1 = document.getElementById("detective")
    detective_1.style.display = "block"
    section  = document.getElementsByClassName("sceneone")
    for(let i = 0;i<section.length;i++){
        section[i].style.display = "none"
    }
    section2 = document.getElementById('sceneonetitle')
    section2.innerHTML = 'Detective Backstory'
  }
  function back(){
    sceneshow()
     section2 = document.getElementById('sceneonetitle')
    section2.innerHTML = 'Please Select Your Character'
     detective_1 = document.getElementById("detective")
    detective_1.style.display = "none"

  }