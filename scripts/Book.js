class Book {
    constructor(pages, title, max_len, margin) {
        this.pages = parseInt(pages);
        this.width = 10;
        this.color = this.getBookColor(pages, max_len);
        this.title = title;
        this.margin = margin;
    }
    
    getBookColor(pages, max_len) {
    // return an RGB color on a gradient
    // reds are longer, greens are shorter
    // need maximum book pages in order to have a cap
    // on the color!!!!.
    let R = Math.floor(pages / max_len * 100)
    let G = Math.floor((1 - (pages / max_len)) * 100)
    let B = 0
    return [R, G, B]

    }

    // SWITCH WIDTHS AND HEIGTHS SO THIS IS MORE SEEABLE!!!!!!!!!
    show(index, maxLen) {
        // probably use this.color as an array and then use the spread op 
        // in fill
        this.bottom = this.margin + maxLen;
        this.top = this.bottom - this.pages;
        this.left = this.width * (index) + this.margin;
        this.right = this.top + this.width;
        fill(...this.color);
        noStroke();
        rect(this.left, this.top, this.width, this.pages);
    }


    clicked() {
        if (mouseX <= this.right && mouseX >= this.left &&
            mouseY >= this.top && mouseY <= this.bottom) {
                console.log("you clicked me!")
        }

    }
}


