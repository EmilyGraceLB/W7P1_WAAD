function theme(backgroundColour,textColour,font) {
    this.backgroundColour = backgroundColour;
    this.textColour = textColour;
    this.font = font;
}

let theme1 = new theme('#ff5733', '#93ff93', 'Verdana');
let theme2 = new theme('#ff93d1', '#93e1ff', 'Roboto');
let theme3 = new theme('#ffee93', '#e193ff', 'Helvetica Neue');

console.log(theme1, theme2, theme3);