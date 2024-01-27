
// import {IShape} from './IShape.js'

// export class Circle implements IShape {
//     public draw() {
//         console.log("Circle is drawn (external module)");
//     }
// }


/// <reference path = "IShape.ts" />

namespace Drawing {
    export class Circle implements IShape {
        public draw() {
            console.log("Circle is drawn (external module)");
        }
    }
}









