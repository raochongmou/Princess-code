class Dep {
    constructor() {
        this.subscriber = new Set();
    }
    // 副作用
    addEffect(effect) {
        this.subscriber
    }
}
const info = {counter:100};
function doubleCounter() {
    console.log(info.counter);
}
doubleCounter();
info.counter++;
doubleCounter();