class QuickSort extends AlgoBase {

    sort(arr = undefined, firstCall = true) {
        if (firstCall) {
            arr = this.arr
        }
        // base case 
        if (arr.length === 1 || arr.length === 0) {
            return arr;
        };

        let pivot = 0;
        let i = this.get_i(arr, pivot);
        let j = this.get_j(arr, pivot, arr.length);
        console.log(i, j, pivot)

        while (i < j) {
            arr = this.swap(i, j, arr);
            i = this.get_i(arr, pivot, i);
            j = this.get_j(arr, pivot, j);
        }

        arr = this.swap(pivot, j, arr)
        
        pivot = j
        // arr.splice(1,2,  ...["hi", "guys"])  
        arr.splice(0, pivot, ...this.sort(arr.slice(0, pivot), false)) 
        arr.splice(pivot + 1, arr.length - pivot - 1, ...this.sort(arr.slice(pivot + 1, arr.length), false))
        this.showState() 
        return arr
    }


    // find things greater than the pivot
    get_i(arr, pivot, i = 0) {
        for(var a = i + 1; a < arr.length; a++) {
            if (this.gt(arr[a], arr[pivot])) {
                return a
            }
        }
        return 0
    }


    // find things less than the pivot
    get_j(arr, pivot, j) {
        for (var b = j - 1; b > 0; b--) {
            if (this.lt(arr[b], arr[pivot])) {
                return b 
            }
        }
        return 0
    }


}