function outerFunction() {
    let outerVariable = 'I am from the outer function';
  
    function innerFunction() {
      console.log(outerVariable);
    }
  
    return innerFunction;
}
let closureExample = outerFunction();
closureExample(); // I am from the outer function
  