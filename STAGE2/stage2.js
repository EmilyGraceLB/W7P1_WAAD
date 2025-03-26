function theme(backgroundColour,textColour,font) {
    this.backgroundColour = backgroundColour;
    this.textColour = textColour;
    this.font = font;
}

//created 3 new objects for different themes
let theme1 = new theme('#ff5733', '#93ff93', 'Verdana');
let theme2 = new theme('#ff93d1', '#93e1ff', 'Roboto');
let theme3 = new theme('#ffee93', '#e193ff', 'Helvetica Neue');

// console.log(theme1, theme2, theme3);
//created three different variables to manage the buttons 
let b1 = document.getElementById("t1");
let b2 = document.getElementById("t2");
let b3 = document.getElementById("t3");

if(b1) {
    theme1;
}

if(b2) {
    theme2;
}

if(b3){
    theme3;
}