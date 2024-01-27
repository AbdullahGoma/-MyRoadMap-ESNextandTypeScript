function sum(n1:number, n2:number) : number
{
  let res:number = n1 + n2;
  return res;
}


let sumRes:number = sum(1, 3);

console.log(sumRes);


let sym1 = Symbol();
let sym2 = Symbol();
let sym3 = Symbol("For Users ID");

console.log(sym1 == sym2);
console.log(sym1); // false
console.log(typeof sym2); // symbol
console.log(sym3);


var StudentsArr = [{
  id: 1,
  uID: Symbol(),
  name: 'Ali',
  faculty: 'FCI'
},{
  id: 2,
  uID: Symbol(),
  name: 'Ahmed',
  faculty: 'Sci'
},{
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

let srchStd = StudentsArr.find(std => std.name == 'Ali');
let srchStdUID = srchStd?.uID;

let srchStdObj = StudentsArr.find(std => std.uID == srchStdUID);
console.log(srchStdObj);


////

let statuses = {
  OPEN: Symbol('Open'),
  IN_PROGRESS: Symbol('In Progress'),
  COMPLETED: Symbol('Completed'),
  HOLD: Symbol('Hold'),
  CANCELED: Symbol('Canceled')
};

let listOfOrders = [
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
]

let inProgress = listOfOrders.filter((order) => order.status == statuses.IN_PROGRESS);

console.log(inProgress);

let y; // any
let y2:any;
y = 20;
y = "Ahmed";

let x: number | string; // union

let numArr: number[]; // Array

let numArr2: Array<number>;
let numArr3 = [1, 2, 3];

console.log(numArr3);


let a: number[] | number;

a = 1;
a = [1, 2, 3];
console.log(a);

let ar: number[] | string[];

ar = ["s", "Sd"];
ar = [1, 23, 3];



let b: any[];
let v = [1, 12, "sa"]; // tuple

b = [1, 2, "dvs", false];

let r: [number, string, number, boolean];
r = [1, "se", 2, false];
// r = [35, 34, "aes",true]; // error"


// Optional Parameter

function summition(n1:number, n2:number, n3?:number) : number
{
  if(n3 == undefined) // n3 is optional
     return n1 + n2;
  else
     return n1 + n2 + n3;
}

summition(1, 2, 3);
summition(1, 1);

/////

function addNumbers(...nums:number[]) : number
{
  var sum:number = 0;
  for(let i = 0; i < nums.length;i++)
    sum = sum + nums[i];
  return sum;
}

console.log(addNumbers(2,233,3322,233));


let foo = (x:number) => x + 10;
console.log(foo(100));


// Function Overloading
function testFun(s1:string) : void;
function testFun(n1:number) : void;
function testFun(n1:number, s1:string) : void;
function testFun(n1:number, s1:number, n3:number) : void;

function testFun(x?:number | string, y?:string | number, z?:number) : void
{
  console.log(x);
  if(y != undefined)
     console.log(y);
  if(z != undefined)
     console.log(y);

}

testFun(1);
testFun("fsas");
testFun(23, "dfs");
testFun(2, 23, 32);

// Enums

enum Color{
  DarkRed, // 0
  Green,
  Blue
}

let bgColor:Color;
bgColor = Color.Blue;

enum Color2{
  DarkRed = 3, // 3
  Green, // 4
  Blue // 5
}

let bgColor1:Color2;
bgColor1 = 3;

function setColor(c:Color) : void
{
  console.log(c);
  console.log(Color[c]);
  document.body.style.backgroundColor = Color[c];
}

setColor(Color.DarkRed);

// Generic

function genericFunction<T>(argument: T) : T[]
{
  var arrayOfT: T[] = [];
  arrayOfT.push(argument);
  return arrayOfT;
}

var arrayFromString = genericFunction<string>("hello");
console.log(arrayFromString[0]);

var arrayFromNumber = genericFunction<Number>(232);
console.log(arrayFromNumber[0]);


// function genericFunctionAny(argument: any) : any[]
// {
//   var arrayOfT = [];
//   arrayOfT.push(argument);
//   return arrayOfT;
// }


// Classes Like Ecma Script + have Access Modifires

class Car
{
  // Default Public
  private ChasisNo:number;
  protected MotorNo:number;
  engine:string;
  public wheel:number;
  constructor(engine:string){
    this.engine = engine;
  }

  disp():void{
    console.log("Engine is : " + this.engine);
  }
}


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

class VanCar
{
  constructor(public model, private plateNo){
    // this.model = model;
    // this.plateNo = plateNo;
  }
}

let j = new VanCar("jk", "ui");
console.log(j.model);

interface IPerson
{
  firstName:string,
  lastName:string,
  age?:number,
  sayHi: () => string
};

interface IPayable
{
  salary:number;
}

class Person
{
  protected uID;
}

class Employee extends Person implements IPerson, IPayable
{
  firstName: string;
  lastName: string;
  jobTitle: string;
  salary: number;
  sayHi: () => "Hi"

  showID(){
    return this.uID
  }
}


// Anonymous Object from Type of interface
var V:IPerson =
{
  firstName: "Abdullah",
  lastName: "Gomaa",
  sayHi: () => "Hi"
}



interface Food
{
  name:string;
  calories:number;
}


function speek(food: Food) : void
{
  console.log("Our " + food.name + " has " + food.calories + " calories.");
}

var ice_cream = {
  name: "ice cream",
  calories: 200
}

speek(ice_cream);

interface IParent1
{
  v1:number;
}

interface IParent2
{
  v2:number;
}


interface Child extends IParent1, IParent2
{
  v3:number;
}

console.log("value 1: " + this.v1 + " value 2: " + this.v2);



// Interface is Abstract, Abstract is not Interface







insert into Employee([Fname], [Minit], [Lname], [SSN], [BDATE], [Address], [Sex], [Salary], [Super_ssn], [Dno])
values ('John', 'B', 'Smith', 123456789, '1965-01-09', '731 Fondren Houston TX', 'M', 30000, 333445555, 5)
,('Franklin', 'T', 'Wong', 333445555, '1955-12-08', '638 Voss Houston TX', 'M',	40000, 888665555, 5)
,('Alicia',	'J', 'Zelaya', 999887777, '1968-01-19',	'3321 Castle Spring TX', 'F', 25000, 987654321, 4)
,('Jennifer', 'S', 'Wallace', 987654321, '1941-06-20', '291 Berry Bellaire TX', 'F', 43000, 888665555, 4)
,('Ramesh', 'K', 'Narayan',	666884444, '1962-09-15', '975 Fire Oak Humble TX', 'M',	38000, 333445555, 5)
,('Joyce', 'A',	'English', 453453453, '1972-07-31', '5631 Rice Houston TX',	'F', 25000, 333445555, 5)
,('Ahmad', 'V',	'Jabbar', 987987987, '1969-03-29', '980 Dallas Houston TX', 'M', 25000, 987654321, 4)
,('James', 'E', 'Borg',	888665555, '1937-11-10', '450 Stone Houston TX', 'M', 55000, NULL, 1)



John
Franklin
Alicia
Jennifer
Ramesh
Joyce
Ahmad
James


B
T
J
S
K
A
V
E



Smith
Wong
Zelaya
Wallace
Narayan
English
Jabbar
Borg



123456789
333445555
999887777
987654321
666884444
453453453
987987987
888665555


1965-01-09
1955-12-08
1968-01-19
1941-06-20
1962-09-15
1972-07-31
1969-03-29
1937-11-10



731 Fondren, Houston, TX
638 Voss, Houston, TX
3321 Castle, Spring, TX
291 Berry, Bellaire, TX
975 Fire Oak, Humble, TX
5631 Rice, Houston, TX
980 Dallas, Houston, TX
450 Stone, Houston, TX



M
M
F
F
M
F
M
M




30000
40000
25000
43000
38000
25000
25000
55000




333445555
888665555
987654321
888665555
333445555
333445555
987654321
NULL




5
5
4
4
5
5
4
1
