class QuickSort extends AlgoBase {

    // the purpose of the firstCall argument is so I can just call
    // .sort() with no arguments, like I'll hopefully be able to do on
    // the other algorithms
    async sort(start = undefined, end = undefined, firstCall = true) {
        // indices to sort on
        if (firstCall) {
            start = 0;
            end = this.arr.length - 1;
        }

        // base case for arr of len 1
        if (end <= start) {
            return;
        };

        // if array is of length 2 and needs sorting
        if (end - start == 1 && this.gt(this.arr[start], this.arr[end])) {
            this.swap(start, end);
            return;
        }

        // all elements before division are smaller than it and all elements
        // after are larger
        let division = await this.partition(start, end)
        console.log(division, start, end)
        this.sort(start, division - 1, firstCall = false);
        this.sort(division + 1, end, firstCall = false);
    }

    async partition(start, end){ 
        // implementation of this guy's partitioning:
        // https://www.youtube.com/watch?v=MZaf_9IZCrc

        // p is the pivot that we're trying to place
        const p = end;
        // i is the 'lagging' index
        var i = start - 1;
        // j is the 'leading' index
        var j = start;
        while (j < p) {
            // normal swapping
            if (this.lt(this.arr[j], this.arr[p])) {
                i++;
                this.swap(i, j);
                await new Promise(r => setTimeout(r, 25))
                this.showState();
            }
            j++;
        }

        // place the pivot at the proper location and return the location
        // NOT a swap, you have to put the pivot at i + 1 AND shift everythign 
        // right of i + 1 to the right
        if (j = p - 1) {
            this.arrayMove(p, i + 1);
            await new Promise(r => setTimeout(r, 25))
            this.showState();
            return i + 1
        }
        return false
    }

}