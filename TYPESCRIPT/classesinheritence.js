var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var vehicle = /** @class */ (function () {
    function vehicle(name) {
        this.name = name;
    }
    vehicle.prototype.getName = function () {
        return this.name;
    };
    return vehicle;
}());
var car = /** @class */ (function (_super) {
    __extends(car, _super);
    function car(model, name) {
        var _this = _super.call(this, name) || this;
        _this.model = model;
        return _this;
    }
    car.prototype.getNameModel = function () {
        return this.model + this.name;
    };
    return car;
}(vehicle));
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(name) {
        return _super.call(this, name) || this;
    }
    return Truck;
}(vehicle));
var mycar = new car("sports model.........", "BMW");
console.log(mycar.getNameModel());
var truck = new Truck("tata truck");
console.log(truck.getName());
