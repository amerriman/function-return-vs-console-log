//Design an experiment to demonstrate the difference between returning a value in a function and console.logging it.

function experimentA(x, y) {
 console.log(x+y);
};
experimentA(1,1)

function experimentB(x,y) {
  return x+y
}
experimentB(2, 2)
//to see what experimentB is doing, you can console.log it outside of the function.
console.log(experimentB(2,2));
