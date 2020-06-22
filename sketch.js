// useful links

// sorting an object:
// https://stackoverflow.com/questions/1069666/sorting-object-property-by-values

let table;
let max_len;
let num_books;
let filterThreshhold = 1000;

function preload() {
    table = loadTable('assets/book_data.csv', 'csv', 'header');
}

function getBookArray(table) {
    let bookArray = []
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

function setup() {
    createCanvas(1000, 1000);
    background(100)
    // find the max of all books of length <= 1000 pages (outliers)
    max_len = Math.max(...table.getColumn('pages').map(Number).filter(
        num => num <= 1000
    ))
    num_books = table.getRowCount()
    bookArray = getBookArray(table)
    for (var i = 0; i < bookArray.length; i++){
        bookArray[i].show(i)
    }
}


function draw() {
}
