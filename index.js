var itemPrice;
var setItemPrice = function (price) {
    if (typeof price === "string") {
        itemPrice = 0;
    }
    else {
        itemPrice = price;
    }
};
setItemPrice(50);
/* {typeof 를 통해 코드검증을 수행하는a것 => 타입 가드}*/
/* 생서자를 이용한 타입스크립 (constructor)

    접근제한자(access Modifiers)
    -public(클라스 외부에서 접근가능)
    -private(클라시 내에서만 접근가능)
    -protected(클라스 내부, 상속받은 자식클라스에서 접근가능)
*/
var Employee = /** @class */ (function () {
    function Employee(fullName, age, jopTitle, hourlyRate, workingHoursPerWeek) {
        var _this = this;
        this.printEmpolyeeDetails = function () {
            console.log(_this._fullName + "\uC758 \uC9C1\uC5C4\uC740 " + _this.jopTitle + "\uC774\uACE0\n        \uC77C\uC8FC\uC77C\uC758 \uC218\uC785\uC740 " + _this.hourlyRate * _this.workingHoursPerWeek + "\uB2EC\uB7EC\uC774\uB2E4");
        };
        this._fullName = fullName;
        this.age = age;
        this.jopTitle = jopTitle;
        this.hourlyRate = hourlyRate;
        this.workingHoursPerWeek = workingHoursPerWeek;
    }
    Object.defineProperty(Employee.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (value) {
            this._fullName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
var employee1 = new Employee('민수', 28, '주니어개발자', 40, 33);
employee1.fullName = "헨리";
console.log(employee1.fullName);
employee1.printEmpolyeeDetails();
