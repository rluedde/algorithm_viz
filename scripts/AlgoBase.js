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

    //////////////// "operator overloads" ///////////////////

    lte(b1, b2) {
        return b1.length <= b2.length
    }

    gte(b1, b2) {
        return b1.length >= b2.length
    }

    lt(b1, b2) {
        return b1.length < b2.length
    }

    gt(b1, b2) {
        return b1.length > b2.length
    }

    equal(b1, b2) {
        return b1.length === b2.length
    }

    ////////////////////////////////////////////////////

}

