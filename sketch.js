let json;

function preload() {
    // this is the data containing all of the data we might need
    json = loadJSON('assets/book_data.json');
}

function setup() {
    let canvL;
    let canvH;
    let margin = 20;
    let width = 10;
    const maxLen = json["maxLen"]
    const numBooks = json["numBooks"]
    const pagesArr = json["pagesArr"]
    const titleArr = json["titleArr"]

    // canvas can change size based on number of books that there are
    // in the data. But, since the amount of books stays the same and I'm
    // working on a GUI, this canvL variable won't ever change
    canvL = width * numBooks + (2 * margin)
    json["canvL"] = canvL
    canvH = maxLen + (2 * margin)
    json["canvH"] = canvH

    const canvas = createCanvas(canvL, canvH);

    // set the width and height of the canvas 
    // select the elements   
    const canvasElement = document.getElementById("canvas")
    const infoElement = document.getElementById("information")
    
    // set the height and width of the canvas
    // "width" and "length" are interchangeable in this case
    canvasElement.style.setProperty("height", canvH);
    canvasElement.style.setProperty("width", canvL);
    infoElement.style.setProperty("height", canvH);
    canvas.parent("canvas")

    var algo = new AlgoBase(pagesArr, titleArr, maxLen, margin, width)
    algo.showState()

    // runs the correct sorting algorithms
    const runButton = document.getElementById("run_button");
    runButton.onclick = async function runAlgo() {

        // constants to be passed into the algorithm constructors

        var selector = document.getElementById("selector")
        var algoStr = selector.value

        // after selecting an algorithm to run, we don't want the user
        // to be able to select another one
        document.getElementById("run_button").disabled = true;
        if (algoStr == "bubble") {
            var algo = new BubbleSort(pagesArr, titleArr, maxLen, margin, width) 
        }
        else if (algoStr == "quick") {
            var algo = new QuickSort(pagesArr, titleArr, maxLen, margin, width)
        }
        else {
            console.log("No algorithm selected!")
            document.getElementById("run_button").disabled = false;
            return;
        }
        await algo.sort()
        // once the algorithm has been ran, we want the user to enable the
        // button so they cna run another algorithm
        document.getElementById("run_button").disabled = false;
    }
}

function draw() {
}

