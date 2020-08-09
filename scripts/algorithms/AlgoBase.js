class AlgoBase {

    constructor(pagesArr, titleArr, maxLen, margin, width) {
        // an array of Book objects
        this.arr = this.getBookArray(pagesArr, titleArr, maxLen, margin, width) 
        this.maxLen = maxLen
    }


    // swap Book at fst with Book at sec 
    swap(fst, sec) {
        // destructuring assignment
        [this.arr[fst], this.arr[sec]] = [this.arr[sec], this.arr[fst]];
    }

    // somewhat of an insert, move the thing at old_index to 
    // new_index and shift all elements accordingly
    arrayMove(old_index, new_index) {
        if (new_index >= this.arr.length) {
            var k = new_index - this.arr.length + 1;
            while (k--) {
                this.arr.push(undefined);
            }
        }
        this.arr.splice(new_index, 0, this.arr.splice(old_index, 1)[0]);
    };
    
    
    getBookArray(pagesArr, titleArr, maxLen, margin, width) {
        let bookArray = [];
        let pages_r;
        let title_r;
        let book_r;
        for (var r = 0; r < pagesArr.length; r++) {
            pages_r = pagesArr[r];
            title_r = titleArr[r];
            book_r = new Book(pages_r, title_r, maxLen, margin, width);
            bookArray.push(book_r);
        }
        return bookArray;
    }


    // draw the current array to the canvas 
    showState() {
        background(100)
        for (var i = 0; i < this.arr.length; i++){
            this.arr[i].show(i, this.maxLen)
        }
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

