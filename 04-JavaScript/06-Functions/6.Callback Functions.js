function functionName(callback) {
    callback();
}
functionName(function () {
    console.log("Callback executed!");
});
