class Book {
    constructor(pages, title, max_len) {
        this.pages = parseInt(pages);
        this.height = 10;
        this.color = this.getBookColor(pages, max_len)
        this.title = title;
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
    show(index) {
        // probably use this.color as an array and then use the spread op 
        // in fill
        fill(...this.color);
        noStroke()
        rect(10, this.height * (index + 1), this.pages, this.height);
        // receive what position in the array the book is and 
        // build a rectangle at that position 
    }
}


