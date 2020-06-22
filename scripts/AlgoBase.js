class AlgoBase {

    constructor(arr) {
        noLoop()
        this.arr = arr
    }

    // swap Book at fst with Book at sec 
    swap(fst, sec) {
        // destructuring assignment
        [this.arr[fst], this.arr[sec]] = [this.arr[sec], this.arr[fst]];
        this.showState()
        return this.arr;
    }

    // draw the current array to the canvas 
    showState() {
        background(100)
        for (var i = 0; i < bookArray.length; i++){
            bookArray[i].show(i)
        }
        redraw()
    }
}