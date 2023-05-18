const info = {counter:100};
function doubleCounter() {
    console.log(info.counter);
}
doubleCounter();
info.counter++;
doubleCounter();