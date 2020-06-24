// useful links

// sorting an object:
// https://stackoverflow.com/questions/1069666/sorting-object-property-by-values

let table;
const filterThreshhold = 1000;
let canvL;
let canvW;
let margin = 20;
let width = 10;
let numBooks;

function preload() {
    table = loadTable('assets/book_data.csv', 'csv', 'header');
}


function setup() {
    // settings
    frameRate(2);
    // only keep books <= 1000 pages
    let tableArr = table.getArray().filter(el => parseInt(el[2]) <= filterThreshhold);
    console.log(tableArr)

    let maxLen = Math.max(...table.getColumn('pages').map(Number).filter(
        num => num <= filterThreshhold
    ));

    let pagesArr = []
    tableArr.forEach(el => pagesArr.push(parseInt(el[2])))

    let titleArr = []
    tableArr.forEach(el => titleArr.push(el[1]))
    console.log(titleArr)

    numBooks = tableArr.length;
    
    // dynamic settings
    // SWITCH WIDTH AND HEIGHT SO THE BOOKS ARE VERTICAL!
    canvL = width * numBooks + (2 * margin)
    canvW = maxLen + (2 * margin)
    createCanvas(canvL, canvW);
    background(100);

    algo = new BubbleSort(pagesArr, titleArr, maxLen, margin, width)
    algo.sort()
}

function mousePressed(){
    // find what book the click is lined up with
    const whichBook = Math.floor((mouseX - margin) / width);
    if (whichBook > -1 && whichBook < numBooks) {
        algo.arr[whichBook].clicked(mouseY);
    }
}

function draw() {

}