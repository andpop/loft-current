const myButton = document.querySelector('#loadButton');
myButton.addEventListener('click', () => {
    . . .
});

myButton.addEventListener('mousemove', () => {
    . . .
});


const myButton = {
    handlers: {},
    addEventListener(eventName, handler) {
        if (!this.handlers[eventName]) {
            this.handlers[eventName] = [];
        }

        if (!this.handlers[eventName].includes(handler)) {
            this.handlers[eventName].push(handler);
        }
    }
}

const myButton = {
    handlers: {
        'click': [
            fn1,
            () => {
                . . .
            }
        ],
        'mousemove': [
            fn1,
            fn2, 
        ],
        'mouseenter': []
    }
}

const calc = {
   sum(a, b) {
       return a + b;
   }, 
   diff(a, b) {
       return a - b;
   },
   mul(a, b) {
       return a * b;
   },
   div(a, b) {
       return a / b;
   }
}

const sqrCalc = {
   sum(a, b) {
       return calc.sum ** 2;
   }, 
   diff(a, b) {
       return calc.diff ** 2;
   },
   mul(a, b) {
       return calc.mul ** 2;
   },
   div(a, b) {
       return calc.div ** 2;
   }
}