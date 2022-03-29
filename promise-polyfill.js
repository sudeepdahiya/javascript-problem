
class myPromsie {
    #thenCallback = [];
    #catchCallback = [];
    #finallyCallback = () => {}
    state = 'PENDING';
    
    constructor(callback){
        callback(this.#resolve, this.#reject)
    }

    #doneCallback = (callbacks, currData) => {
        for(let i = 0; i < callbacks.length; i++){
            currData = callbacks[i](currData)
        }
        this.#finallyCallback();
    }
    
    #resolve = (data) => {
        this.state = 'SUCCESS';
        this.#doneCallback(this.#thenCallback, data);
    }

    #reject = (error) => {
        this.state = 'ERROR';
        this.#doneCallback(this.#catchCallback, error);
    }
    then = function(callback){
        this.#thenCallback.push(callback)
        return this;    
    }

    catch = function(callback){
        this.#catchCallback.push(callback)
        return this;
    }

    finally = function(callback){
        this.#finallyCallback = callback;
        return this;
    }
}

const promise = new myPromsie(function(resolve, reject) {
    setTimeout(() => {
    	resolve('success')
    }, 2000)
})
console.log('promise',promise)

promise.then((res) => {
	console.log('res', res)
    return res+'hi world'
}).then(res => {
    console.log('res2', res)
}).catch(e => {
    console.log('error', e)
}).finally(() => {
    console.log('this is finally')
})
