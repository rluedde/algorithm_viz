class AlgoBase {

    constructor(arr) {
        this.arr = arr
    }

    // swap Book at fst with Book at sec 
    swap(fst, sec, arr) {
        // destructuring assignment
        [arr[fst], arr[sec]] = [arr[sec], arr[fst]];
        return arr;
    }

    // draw the current array to the canvas 
    showState() {
        background(100)
        for (var i = 0; i < this.arr.length; i++){
            this.arr[i].show(i)
        }
        redraw()
    }


    // this hasn't been tested so idk if it works
    checkSorted() {
        for (var i = 1; i < this.arr.length; i++){
            if (this.lte(this.arr[i], this.arr[i - 1])) {
                return false
            }
        }
        return true

    }

    //////////////// "operator overloads" ///////////////////

    lte(b1, b2) {
        return b1.pages <= b2.pages
    }

    gte(b1, b2) {
        return b1.pages >= b2.pages
    }

    lt(b1, b2) {
        return b1.pages < b2.pages
    }

    gt(b1, b2) {
        return b1.pages > b2.pages
    }

    equal(b1, b2) {
        return b1.pages === b2.pages
    }

    ////////////////////////////////////////////////////

}

