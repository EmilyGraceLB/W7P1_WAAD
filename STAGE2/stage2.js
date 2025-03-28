//creates objects for themes
function theme(backgroundColour,textColour,font) {
    this.backgroundColour = backgroundColour;
    this.textColour = textColour;
    this.font = font;
}

//created 3 new objects for different themes
let theme1 = new theme('#ff5733', '#93ff93', 'Verdana');
let theme2 = new theme('#ff93d1', '#93e1ff', '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif');
let theme3 = new theme('#ffee93', '#e193ff', '"Courier New", Courier, monospace');

//created three different variables to manage the buttons 
// let b1 = document.getElementById("t1");
// let b2 = document.getElementById("t2");
// let b3 = document.getElementById("t3");

//pair themes to buttons
function pairTheme(theme, element) {
    element.style.backgroundColor = theme.backgroundColour;
    element.style.color = theme.textColour;
    element.style.fontFamily = theme.font;
}

//paring themes to labels
pairTheme(theme3, document.getElementById("t3"));
pairTheme(theme2, document.getElementById("t2"));
pairTheme(theme1, document.getElementById("t1"));

for(let btn of document.getElementsByName("theme")) {
    btn.addEventListener("change", function (event) {
        const selected = event.target.value;
        const theme = selected === "op1" ? theme1 : selected === "op2" ? theme2 : theme3;
        pairTheme(theme, document.body);
    })
}