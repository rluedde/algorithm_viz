// useful links
// sorting an object:
// https://stackoverflow.com/questions/1069666/sorting-object-property-by-values

let json;

function preload() {
    json = loadJSON('assets/book_data.json');
}

function setup() {
    const filterThreshhold = 1000;
    let canvL;
    let canvH;
    let margin = 20;
    let width = 10;
    const maxLen = json["maxLen"]
    const numBooks = json["numBooks"]

    // dynamic settings
    canvL = width * numBooks + (2 * margin)
    json["canvL"] = canvL
    canvH = maxLen + (2 * margin)
    json["canvH"] = canvH

    const canvas = createCanvas(canvL, canvH);

    // set the width and height of the canvas 
    // select the elements   
    const canvasElement = document.getElementById("canvas")
    const infoElement = document.getElementById("information")
    
    canvasElement.style.setProperty("height", canvH);
    canvasElement.style.setProperty("width", canvL);
    infoElement.style.setProperty("height", canvH);
    canvas.parent("canvas")

    // runs the correct sorting algorithms
    const runButton = document.getElementById("run_button");
    runButton.onclick = function runAlgo() {
        console.log("hippos")
        const pagesArr = json["pagesArr"]
        const titleArr = json["titleArr"]

        var selector = document.getElementById("selector")
        var algoStr = selector.value

        if (algoStr == "bubble") {
            var algo = new BubbleSort(pagesArr, titleArr, maxLen, margin, width) 
            algo.sort()
        }

        else if (algoStr == "quick") {
            var algo = new QuickSort(pagesArr, titleArr, maxLen, margin, width)
            algo.sort()
        }

        else {
            console.log("No algorithm selected!")
        }
    }
    background(100);
}

function draw() {
}

