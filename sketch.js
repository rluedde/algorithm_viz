// useful links

// sorting an object:
// https://stackoverflow.com/questions/1069666/sorting-object-property-by-values

let table;
let maxLen;
let numBooks;
let bookArray;
let filterThreshhold = 1000;


function preload() {
    table = loadTable('assets/book_data.csv', 'csv', 'header');
}


function getBookArray(table, numBooks, filterThreshhold, maxLen) {
    let bookArray = [];
    for (var r = 0; r < numBooks; r++) {
        pages_r = table.getNum(r, "pages")
        if (pages_r < filterThreshhold) {
            title_r = table.getString(r, "title");
            book_r = new Book(pages_r, title_r, maxLen);
            bookArray.push(book_r);
        }
    }
    return bookArray;
}


function setup() {
    createCanvas(1000, 1000);
    background(100);
    frameRate(2);
    maxLen = Math.max(...table.getColumn('pages').map(Number).filter(
        num => num <= 1000
    ));
    numBooks = table.getRowCount();
    bookArray = getBookArray(table, numBooks, filterThreshhold, maxLen);
    algo = new AlgoBase(bookArray)
}


function draw() {
    // find the max of all books of length <= 1000 pages (outliers)
    bookArray = algo.swap(0, 1, bookArray)
}

