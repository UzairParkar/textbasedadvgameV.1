const frames = [
    `C`, `Click`, `Click Me`, ``,  `Click Me To`, `Click Me To Play`, ``, `Click Me To Play`, ``,  `Click Me To Play`,  ``, `Click Me To Play`, ``,
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
}


