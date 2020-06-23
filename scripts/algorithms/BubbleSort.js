class BubbleSort extends AlgoBase {

    sort() {
        let fs = 0
        // go through books and swap them
        while (!this.checkSorted()) {
            for (var i = 1; i < this.arr.length; i++) {
                let currBook = this.arr[i]
                let lastBook = this.arr[i - 1]
                if (this.lt(currBook, lastBook)) {
                    this.arr = this.swap(i - 1, i, this.arr)
                }
                this.showState()
                fs++
                // DOESN'T STOP WHEN ALL THE WAY SORTED!
                if (fs >= 7000) {
                    console.log("broke")
                    return "BROKEN"
                }
            }
        }
        
    }
}