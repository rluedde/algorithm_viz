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

function setup() {
    // settings
    frameRate(2);
    noLoop();

    // find the max of all books of length <= 1000 pages (outliers)
    maxLen = Math.max(...table.getColumn('pages').map(Number).filter(
        num => num <= 1000
    ));
    numBooks = table.getRowCount();
    
    // dynamic settings
    // SWITCH WIDTH AND HEIGHT SO THE BOOKS ARE VERTICAL!
    createCanvas(maxLen + 20, 910);
    background(100);

    algo = new BubbleSort(table, numBooks, filterThreshhold, maxLen)
    //algo.sort()
}