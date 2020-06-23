class AlgoBase {

    constructor(table, numBooks, filterThreshhold, maxLen, margin) {
        // an array of Book objects
        this.arr = this.getBookArray(table, numBooks, filterThreshhold, maxLen, margin) 
    }


    // swap Book at fst with Book at sec 
    swap(fst, sec, arr) {
        // destructuring assignment
        [arr[fst], arr[sec]] = [arr[sec], arr[fst]];
        return arr;
    }
    
    
    getBookArray(table, numBooks, filterThreshhold, maxLen, margin) {
        let bookArray = [];
        let pages_r;
        let title_r;
        let book_r;
        for (var r = 0; r < numBooks; r++) {
            pages_r = table.getNum(r, "pages")
            if (pages_r < filterThreshhold) {
                title_r = table.getString(r, "title");
                book_r = new Book(pages_r, title_r, maxLen, margin);
                bookArray.push(book_r);
            }
        }
        return bookArray;
    }


    // draw the current array to the canvas 
    showState() {
        background(100)
        for (var i = 0; i < this.arr.length; i++){
            this.arr[i].show(i, maxLen)
        }
        redraw()
    }


    // this hasn't been tested so idk if it works
    checkSorted() {
        for (var i = 1; i < this.arr.length; i++) {
            if (this.gt(this.arr[i - 1], this.arr[i])) {
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

