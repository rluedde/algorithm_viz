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

    let maxLen = Math.max(...table.getColumn('pages').map(Number).filter(
        num => num <= filterThreshhold
    ));

    let pagesArr = []
    tableArr.forEach(el => pagesArr.push(parseInt(el[2])))

    let titleArr = []
    tableArr.forEach(el => titleArr.push(el[1]))

    numBooks = tableArr.length;
    
    // dynamic settings
    canvL = width * numBooks + (2 * margin)
    canvH = maxLen + (2 * margin)
    const canvas = createCanvas(canvL, canvH);

    const canvasElement = document.getElementById("canvas")
    const infoElement = document.getElementById("information")

    canvasElement.style.setProperty("height", canvH);
    canvasElement.style.setProperty("width", canvL);
    infoElement.style.setProperty("height", canvH);
    canvas.parent("canvas")

    background(100);

    algo = new QuickSort(pagesArr, titleArr, maxLen, margin, width)
    algo.sort()
}

function draw() {

}

