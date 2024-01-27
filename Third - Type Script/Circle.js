var Circle = /** @class */ (function () {
    function Circle() {
    }
    Circle.prototype.draw = function () {
        console.log("Circle is drawn (external module)");
    };
    return Circle;
}());
export { Circle };
