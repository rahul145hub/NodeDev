// this keyword in nodejs strict 
'use strict'

// 1.globally
console.log(this);    // return empty obj {}


function help() {
    // inside function
    console.log(this); // return undefined
}

help();

let obj = {
    name: "Ram",
    fun: function () {
        console.log(this);

        function insideFun() {
            console.log(this);
        }

        // 4.Obj fun fun
        insideFun(); // return undefined
    }
}

// 3.Obj fun
obj.fun();   // return obj


