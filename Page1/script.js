let photo1 = document.getElementById("photo1");
let photo2 = document.getElementById("photo2");
let photo3 = document.getElementById("photo3");

let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");

function hideAllImagesAndButtons() {
    photo1.style.display = 'none';
    photo2.style.display = 'none';
    photo3.style.display = 'none';
    button1.style.backgroundColor = 'buttonface';
    button2.style.backgroundColor = 'buttonface';
    button3.style.backgroundColor = 'buttonface';

}

button1.onclick = function() {
    hideAllImagesAndButtons();
    photo1.style.display = 'block'; 
    button1.style.backgroundColor = 'grey';
};

button2.onclick = function() {
    hideAllImagesAndButtons();
    photo2.style.display = 'block';  
    button2.style.backgroundColor = 'grey';
};

button3.onclick = function() {
    hideAllImagesAndButtons();
    photo3.style.display = 'block';  
    button3.style.backgroundColor = 'grey';
};

hideAllImagesAndButtons();
photo1.style.display = 'block';
button1.style.backgroundColor = 'grey';