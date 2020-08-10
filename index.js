import {Book} from "./scripts/Book.js"
import {AlgoBase} from "./scripts/algorithms/AlgoBase.js"
import {BubbleSort} from "./scripts/algorithms/BubbleSort.js"
import {QuickSort} from "./scripts/algorithms/QuickSort.js"

const runButton = document.getElementById("run_button");

runButton.onclick = function runAlgo() {
    console.log("hippos")
    var selector = document.getElementById("selector")
    var algo = selector.value
    //algo = new QuickSort(pagesArr, titleArr, maxLen, margin, width)
    //algo.sort()
    console.log(algo)
};