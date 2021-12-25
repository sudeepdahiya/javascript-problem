class Heap{
    constructor(func){
        this.compareFunc = func; 
        this.data = [];
    }
    getParentIndex(i){
        return Math.floor((i-1)/2);
    }
    getChildIndex(i) {
        return [i * 2 + 1, i * 2 + 2];
    }
    swap(i, j){
        let data = this.data[i];
        this.data[i] = this.data[j];
        this.data[j] = data; 
    }
    add(val) {
        let curIndex = this.data.length;
        this.data[curIndex] = val;
        if (curIndex >= 1) {
            let parentIndex = this.getParentIndex(curIndex);
            while(parentIndex >= 0) {
                if (this.compareFunc( this.data[parentIndex], this.data[curIndex])){
                    this.swap(curIndex, parentIndex)
                }
                curIndex = parentIndex;
                parentIndex = this.getParentIndex(curIndex)
            }
        }
        return true;
    }
    peek(){
        if (this.data.length > 0) {
            return this.data[0];
        }    
        return null;
    }
    pop(){
        if(this.data.length === 0){
            return null;
        }
        let val = this.data[0];
        this.swap(0, this.data.length-1);
        this.data.length = this.data.length -1;    
        let currIndex = 0;
        let [l, r] = this.getChildIndex(0);
       
        while(l < this.data.length) {
            const left = this.compareFunc(this.data[currIndex],  this.data[l]);
            let right = false;
            if (r < this.data.length) {
                right = this.compareFunc(this.data[currIndex],  this.data[r]);
            }
            
            if(left && right) {
                if (this.compareFunc(this.data[l],  this.data[r])) {
                    this.swap(currIndex, r);
                    currIndex = r;
                } else {
                    this.swap(currIndex, l);
                    currIndex = l;
                }
            } else if (left) {
                this.swap(currIndex, l);
                currIndex = l;
            } else if (right) {
                this.swap(currIndex, r);
                currIndex = r;
            } else {
                currIndex = this.data.length;
            }
          
           [l, r] = this.getChildIndex(currIndex);
        }
        return val;
    }
}

// function: define max or min heap. 
const minHeap = new Heap((parent, child) =>{
    if (parent[1] - child[1] > 0) {
        return true
    }
    return false;
} );

minHeap.add([50,1])
minHeap.add([20,5])
minHeap.add([40,2])
minHeap.add([60,9])
minHeap.add([30,10])
minHeap.add([45,4])
minHeap.add([25,3])
minHeap.add([55,8])
minHeap.add([75,11])
minHeap.add([109,12])

console.log('min headp', minHeap.data)

console.log(minHeap.pop())
console.log(minHeap.pop())
console.log(minHeap.pop())
console.log(minHeap.pop())
console.log(minHeap.pop())
console.log(minHeap.pop())
console.log(minHeap.pop())
console.log(minHeap.pop())
console.log(minHeap.pop())
console.log(minHeap.pop())
console.log(minHeap.pop())

console.log('min headp', minHeap.data)
