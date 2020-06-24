class Book {
    constructor(pages, title, maxLen, margin, width) {
        this.pages = parseInt(pages);
        this.width = width;
        this.color = this.getBookColor(pages, maxLen);
        this.title = title;
        this.margin = margin;
        this.maxLen = maxLen
        this.clickedSwitch = false
    }
    
    getBookColor(pages, max_len) {
    // return an RGB color on a gradient
    // reds are longer, greens are shorter
    // need maximum book pages in order to have a cap
    // on the color!!!!.
    let R = Math.floor(pages / max_len * 100)
    let G = Math.floor((1 - (pages / max_len)) * 100)
    let B = 100
    return [R, G, B]

    }

    // SWITCH WIDTHS AND HEIGTHS SO THIS IS MORE SEEABLE!!!!!!!!!
    show(index, maxLen) {
        // probably use this.color as an array and then use the spread op 
        // in fill
        this.bottom = this.margin + maxLen;
        this.top = this.bottom - this.pages;
        this.left = this.width * index + this.margin;
        this.right = this.top + this.width;
        if (this.clickedSwitch) {
            fill(190, 0, 0)

        }
        else {
            fill(...this.color);
        }
        //noStroke();
        rect(this.left, this.top, this.width, this.pages);
    }


    clicked(index) {
        if (mouseY >= this.top && mouseY <= this.bottom) {
            console.log("you clicked me!")

            if (this.clickedSwitch) {
                this.clickedSwitch = false
            }
            else {
                this.clickedSwitch = true
            }
            this.show(index, this.maxLen)
        }
    }
}


