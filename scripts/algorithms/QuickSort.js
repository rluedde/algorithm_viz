class QuickSort extends AlgoBase {

    sort(start = undefined, end = undefined, firstCall = true) {
        // indices to sort on
        if (firstCall) {
            start = 0;
            end = this.arr.length - 1
        }

        // base case 
        if (end <= start) {
            console.log("returning")
            return;
        };

        let division = this.partition(start, end)
        
        this.sort(start, division - 1, firstCall = false);
        this.sort(division + 1, end, firstCall = false);
    }

    partition(start, end){ 
        // implementation of this guy's partitioning:
        // https://www.youtube.com/watch?v=MZaf_9IZCrc
        const p = end;
        var i = start - 1;
        var j = start;
        while (j < p - 1) {
            // normal swapping
            if (this.lt(this.arr[j], this.arr[p])) {
                i++
                this.swap(i, j)
            }
            j++;
        }

        // place the pivot at the proper location and return the location
        if (j == p - 1) {
            this.swap(i + 1, p)
            return i + 1
        }
    }

}