// useful links

// sorting an object:
// https://stackoverflow.com/questions/1069666/sorting-object-property-by-values

// p5 tables:
// https://p5js.org/reference/#/p5.Table


class Book {

    constructor(length, title, max_len) {
        this.length = length;
        this.height = 20;
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
        rect(30, 30 * (index + 1) + 30, this.length, this.height);
        // receive what position in the array the book is and 
        // build a rectangle at that position accordingly
    }
}


let table;

function preload() {
    table = loadTable('assets/book_data.csv', 'csv', 'header');
}

// these should be global
var max_len;
var num_books;

function setup() {
    createCanvas(500, 500);
    background(100)
    max_len = Math.max(...table.getColumn('pages').map(Number))
    num_books = table.getRowCount()
    print(table.getColumnCount());
}


function draw() {
    // the data shouldn't be loaded every time it draws lmao
    let b1 = new Book(1200, "cows", max_len, num_books)
    let b2 = new Book(300, "boys", max_len, num_books)
    let books = [b1, b2]
    for (var i = 0; i < books.length; i++){
        books[i].show(i)
    }
}
