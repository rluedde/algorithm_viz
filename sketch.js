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
    // only keep books <= 1000 pages
    let tableObj = table.getArray().filter(el => parseInt(el[2]) <= 1000);
    console.log(tableObj)

    maxLen = Math.max(...table.getColumn('pages').map(Number).filter(
        num => num <= 1000
    ));
    numBooks = table.getRowCount();
    let margin = 20
    let width = 10
    
    // dynamic settings
    // SWITCH WIDTH AND HEIGHT SO THE BOOKS ARE VERTICAL!
    const canvL = 910 + margin
    const canvW = maxLen + (2 * margin)
    createCanvas(canvL, canvW);
    background(100);

    algo = new BubbleSort(table, numBooks, filterThreshhold, maxLen, margin, width)
    algo.sort()
}

function draw() {

}