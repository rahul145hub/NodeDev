// this keyword in nodejs non-strict 

// 1.globally
console.log(this);    // return empty obj {}


function help() {
    // 2.inside function
    console.log(this); // return global obj
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
        insideFun(); // return global obj
    }
}

// 3.Obj fun
obj.fun();   // return obj


