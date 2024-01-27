var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function sum(n1, n2) {
    var res = n1 + n2;
    return res;
}
var sumRes = sum(1, 3);
console.log(sumRes);
var sym1 = Symbol();
var sym2 = Symbol();
var sym3 = Symbol("For Users ID");
console.log(sym1 == sym2);
console.log(sym1); // false
console.log(typeof sym2); // symbol
console.log(sym3);
var StudentsArr = [{
        id: 1,
        uID: Symbol(),
        name: 'Ali',
        faculty: 'FCI'
    }, {
        id: 2,
        uID: Symbol(),
        name: 'Ahmed',
        faculty: 'Sci'
    }, {
        id: 3,
        uID: Symbol(),
        name: 'Mohammed',
        faculty: 'Eng'
    }];
StudentsArr.push({
    id: 4,
    uID: Symbol(),
    name: 'Mahmoud',
    faculty: 'Sci'
});
console.log(StudentsArr[2].uID == StudentsArr[3].uID);
var srchStd = StudentsArr.find(function (std) { return std.name == 'Ali'; });
var srchStdUID = srchStd === null || srchStd === void 0 ? void 0 : srchStd.uID;
var srchStdObj = StudentsArr.find(function (std) { return std.uID == srchStdUID; });
console.log(srchStdObj);
////
var statuses = {
    OPEN: Symbol('Open'),
    IN_PROGRESS: Symbol('In Progress'),
    COMPLETED: Symbol('Completed'),
    HOLD: Symbol('Hold'),
    CANCELED: Symbol('Canceled')
};
var listOfOrders = [
    {
        clientName: "Ali",
        orderDate: new Date(),
        listOfProducts: [],
        status: statuses.IN_PROGRESS
    },
    {
        clientName: "Ali",
        orderDate: new Date(),
        listOfProducts: [],
        status: statuses.IN_PROGRESS
    },
    {
        clientName: "Mohamed",
        orderDate: new Date(),
        listOfProducts: [],
        status: statuses.COMPLETED
    }
];
var inProgress = listOfOrders.filter(function (order) { return order.status == statuses.IN_PROGRESS; });
console.log(inProgress);
var y; // any
var y2;
y = 20;
y = "Ahmed";
var x; // union
var numArr; // Array
var numArr2;
var numArr3 = [1, 2, 3];
console.log(numArr3);
var a;
a = 1;
a = [1, 2, 3];
console.log(a);
var ar;
ar = ["s", "Sd"];
ar = [1, 23, 3];
var b;
var v = [1, 12, "sa"]; // tuple
b = [1, 2, "dvs", false];
var r;
r = [1, "se", 2, false];
// r = [35, 34, "aes",true]; // error"
// Optional Parameter
function summition(n1, n2, n3) {
    if (n3 == undefined) // n3 is optional
        return n1 + n2;
    else
        return n1 + n2 + n3;
}
summition(1, 2, 3);
summition(1, 1);
/////
function addNumbers() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0; i < nums.length; i++)
        sum = sum + nums[i];
    return sum;
}
console.log(addNumbers(2, 233, 3322, 233));
var foo = function (x) { return x + 10; };
console.log(foo(100));
function testFun(x, y, z) {
    console.log(x);
    if (y != undefined)
        console.log(y);
    if (z != undefined)
        console.log(y);
}
testFun(1);
testFun("fsas");
testFun(23, "dfs");
testFun(2, 23, 32);
// Enums
var Color;
(function (Color) {
    Color[Color["DarkRed"] = 0] = "DarkRed";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var bgColor;
bgColor = Color.Blue;
var Color2;
(function (Color2) {
    Color2[Color2["DarkRed"] = 3] = "DarkRed";
    Color2[Color2["Green"] = 4] = "Green";
    Color2[Color2["Blue"] = 5] = "Blue"; // 5
})(Color2 || (Color2 = {}));
var bgColor1;
bgColor1 = 3;
function setColor(c) {
    console.log(c);
    console.log(Color[c]);
    document.body.style.backgroundColor = Color[c];
}
setColor(Color.DarkRed);
// Generic 
function genericFunction(argument) {
    var arrayOfT = [];
    arrayOfT.push(argument);
    return arrayOfT;
}
var arrayFromString = genericFunction("hello");
console.log(arrayFromString[0]);
var arrayFromNumber = genericFunction(232);
console.log(arrayFromNumber[0]);
// function genericFunctionAny(argument: any) : any[]
// {
//   var arrayOfT = [];
//   arrayOfT.push(argument);
//   return arrayOfT;
// }
// Classes Like Ecma Script + have Access Modifires
var Car = /** @class */ (function () {
    function Car(engine) {
        this.engine = engine;
    }
    Car.prototype.disp = function () {
        console.log("Engine is : " + this.engine);
    };
    return Car;
}());
var obj = new Car("Engine1");
// var obj1 = new Car();
console.log("Reading attribute value Engine as: " + obj.engine);
obj.disp();
// class VanCar
// {
//   public model:string;
//   private plateNo:string;
//   constructor(model, plateNo){
//     this.model = model;
//     this.plateNo = plateNo;
//   }
// }
// ======
var VanCar = /** @class */ (function () {
    function VanCar(model, plateNo) {
        this.model = model;
        this.plateNo = plateNo;
        // this.model = model;
        // this.plateNo = plateNo;
    }
    return VanCar;
}());
var j = new VanCar("jk", "ui");
console.log(j.model);
;
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Employee.prototype.showID = function () {
        return this.uID;
    };
    return Employee;
}(Person));
// Anonymous Object from Type of interface
var V = {
    firstName: "Abdullah",
    lastName: "Gomaa",
    sayHi: function () { return "Hi"; }
};
function speek(food) {
    console.log("Our " + food.name + " has " + food.calories + " calories.");
}
var ice_cream = {
    name: "ice cream",
    calories: 200
};
speek(ice_cream);
console.log("value 1: " + this.v1 + " value 2: " + this.v2);
// Interface is Abstract, Abstract is not Interface
