class Book {
    constructor(length, title, max_len) {
        this.length = length;
        this.height = 10;
        this.color = this.getBookColor(length, max_len)
        this.title = title;
    }
    
    getBookColor(length, max_len) {
    // return an RGB color on a gradient
    // reds are longer, greens are shorter
    // need maximum book length in order to have a cap
    // on the color!!!!.
    let R = Math.floor(length / max_len * 100)
    let G = Math.floor((1 - (length / max_len)) * 100)
    let B = 0
    return [R, G, B]

    }


    show(index) {
        // probably use this.color as an array and then use the spread op 
        // in fill
        fill(...this.color);
        noStroke()
        rect(10, this.height * (index + 1), this.length, this.height);
        // receive what position in the array the book is and 
        // build a rectangle at that position 
    }
}


