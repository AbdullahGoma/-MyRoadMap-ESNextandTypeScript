// export interface IShape {
//     draw();
// }
// import {IShape} from './IShape.js'
// export class Circle implements IShape {
//     public draw() {
//         console.log("Circle is drawn (external module)");
//     }
// }
/// <reference path = "IShape.ts" />
var Drawing;
(function (Drawing) {
    var Circle = /** @class */ (function () {
        function Circle() {
        }
        Circle.prototype.draw = function () {
            console.log("Circle is drawn (external module)");
        };
        return Circle;
    }());
    Drawing.Circle = Circle;
})(Drawing || (Drawing = {}));
// import { Circle } from "./Circle.js";
// var myShapes = new Circle();
// myShapes.draw();
// /// <reference path = "IShape.ts" />
// /// <reference path = "Circle.ts" />
// namespace Drawing {
//     var myShapes = new Circle();
//     myShapes.draw();
// }
/// <reference path = "IShape.ts" />
/// <reference path = "Circle.ts" />
var myShapes = new Drawing.Circle();
myShapes.draw();
