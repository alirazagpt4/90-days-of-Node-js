function init() {
    var name = "Mozilla"; // name is a local variable created by init
    function displayName() {
      // displayName() is the inner function, that forms a closure
      console.log(name); // use variable declared in the parent function
    }
    displayName();
  }
  init();
  

//   example 2 

function makeAdder(x) {
    return function (y) {
      return x + y;
    };
  }
  
  const add5 = makeAdder(5);
  const add10 = makeAdder(10);
  
  console.log(add5(2)); // 7
  console.log(add10(2)); // 12

//   web example of closures 

function makeSizer(size){
    return function (){
        document.body.style.fontSize= `${size}px`
    }
}

const size14 = makeSizer(14);
const size18 = makeSizer(18);
const size16 = makeSizer(16);
  

const counter = (
    function(){
        let previousCounter = 0;
        function changeBy(val){
            previousCounter += val;
        }

        return {
            incrementBy(){
                changeBy(1);
            },
            decrementBy(){
                changeBy(-1);
            },
            value(){
                return previousCounter;
            }
        }
    }
)()

console.log(counter.value()); // 0

counter.incrementBy();
counter.incrementBy();
console.log(counter.value()); // 2

counter.decrementBy();

console.log(counter.value()); // 1


// closures chain

const e = 10;

function sum(a){
    return function(b){
        return function(c){
            return function(d){
                return a + b + c + d + e;
            }
        }
    }
}

console.log(sum(1)(2)(3)(4)); // 20

// Closures can capture variables in block scopes and module scopes as well. For example, the following creates a closure over the block-scoped variable y:

function outer() {
    let getY;
    {
      const y = 6;
      getY = () => y;
    }
    console.log(typeof y); // undefined
    console.log(getY()); // 6
  }
  
  outer();
  