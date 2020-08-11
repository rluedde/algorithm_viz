class BubbleSort extends AlgoBase {

    async sort() {
        // go through books and swap them
        while (!this.checkSorted()) {
            for (var i = 1; i < this.arr.length; i++) {
                let currBook = this.arr[i]
                let lastBook = this.arr[i - 1]
                if (this.lt(currBook, lastBook)) {
                    this.swap(i - 1, i);
                    this.showState()
                    // pause every ms so we can show everything getting sorted
                    await new Promise(r => setTimeout(r, 1));
                }
                // DOESN'T STOP WHEN ALL THE WAY SORTED!
            }
        }

    }
}