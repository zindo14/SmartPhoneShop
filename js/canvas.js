let xPos = 0; 
let intervalHandleFromLeft;
let intervalHandleFromRight;
let ctx;
let windowHeight = window.innerHeight;
let windowWidth = window.innerWidth;


loadBackground = () => { 
    let canvasElement = document.getElementById('logo-canvas');
    ctx = canvasElement.getContext('2d');
}

fromLeft = () => { 
    loadBackground();

    let img = new Image();
    img.src = "./Slike/poruka.png";
    img.onload = () => { 
        ctx.clearRect(0, 0, windowWidth, windowHeight);
        ctx.drawImage(img, xPos, 20);
    }

    xPos+=5;

    if(xPos >= windowWidth - img.width - 25) { 
        clearInterval(intervalHandleFromLeft);
        intervalHandleFromRight = setInterval(fromRight, 25);
    }
}

fromRight = () => { 
    loadBackground();

    let img = new Image();
    img.src = "./Slike/poruka.png";
    img.onload = () => { 
        ctx.clearRect(0, 0, windowWidth, windowHeight);
        ctx.drawImage(img, xPos, 20);
    }

    xPos-=5;
 
    if(xPos < 0) { 
        clearInterval(intervalHandleFromRight);
        intervalHandleFromLeft = setInterval(fromLeft, 25);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    let canvasElement = document.getElementById('logo-canvas');
    canvasElement.width = windowWidth - 25;
    canvasElement.height = 200;
    intervalHandleFromLeft = setInterval(fromLeft, 25);
}) 