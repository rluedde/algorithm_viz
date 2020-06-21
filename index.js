// useful links

// sorting an object:
// https://stackoverflow.com/questions/1069666/sorting-object-property-by-values

// p5 tables:
// https://p5js.org/reference/#/p5.Table


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


let table;

function preload() {
    table = loadTable('assets/book_data.csv', 'csv', 'header');
}

// these should be global
var max_len;
var num_books;
var filterThreshhold = 1000;

function setup() {
    createCanvas(10000, 5000);
    background(100)
    // find the max of all books of length <= 1000 pages (outliers)
    max_len = Math.max(...table.getColumn('pages').map(Number).filter(
        num => num <= 1000
    ))
    num_books = table.getRowCount()
    print(table.getColumnCount());
    bookArray = getBookArray(table)
    for (var i = 0; i < bookArray.length; i++){
        bookArray[i].show(i)
    }
}

function getBookArray(table) {
    let bookArray = []
    // go through each table row and make a Book
    for (var r = 0; r < num_books; r++) {
        pages_r = table.getNum(r, "pages")
        if (pages_r < filterThreshhold) {
            title_r = table.getString(r, "title")
            book_r = new Book(pages_r, title_r, max_len)
            bookArray.push(book_r)
        }
    }
    return bookArray
}


function draw() {
    
}
