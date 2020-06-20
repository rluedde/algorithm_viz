// useful links

// sorting an object:
// https://stackoverflow.com/questions/1069666/sorting-object-property-by-values

// p5 tables:
// https://p5js.org/reference/#/p5.Table


class Book {

    constructor(length, title, max_len) {
        this.length = length;
        this.height = 20;
        this.color = this.getBookColor(this.length, max_len)
        this.title = title;
    }
    
    
    getBookColor(index, max_len) {
    // return an RGB color on a gradient
    // reds are longer, greens are shorter
    // need maximum book length in order to have a cap
    // on the color!!!!
    return [99, 50, 15]
    }


    show(index) {
        // probably use this.color as an array and then use the spread op 
        // in fill
        fill(...this.color);
        rect(30, 30 * (index + 1) + 30, this.length, this.height);
        // receive what position in the array the book is and 
        // build a rectangle at that position accordingly
    }
}


// for displaying all books on the canvas
// the meaning of this class name is purely symbolic
class Library {

    constructor(bookArray) {
        this.bookArray = bookArray;
    }

    show() {
        // go through each book in bookArray and call Book.show(index)
        // probably use forEach here
        for (var i  = 0; i < this.bookArray.length; i++) {
            let book = this.bookArray[i]
            book.show(i, book.color, book.length)
        }
    }
}


function setup() {
    createCanvas(500, 500);
    background(100)
    colorMode(RGB, 100)
}

function draw() {
    // the data shouldn't be loaded every time it draws lmao
    const data = loadTable('assets/book_data.csv', 'csv', 'header')
    const max_len = max(data.getColumn('pages'))
    const num_books = data.getRowCount()
    let b1 = new Book(100, "cows", max_len)
    b1.show(1)
}
