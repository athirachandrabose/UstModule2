var Employee = /** @class */ (function () {
    // constructor(){
    //     this.empno=101;
    //     this.ename="abc";
    //     this.sal=20000;
    // this.attendence=18;
    // }
    function Employee(empno, ename, sal, attendence) {
        this.empno = empno;
        this.ename = ename;
        this.sal = sal;
        this.attendence = attendence;
    } //mo overloading in constructor
    Employee.prototype.getempno = function () {
        return this.empno;
    };
    Employee.prototype.getename = function () {
        return this.ename;
    };
    Employee.prototype.getsal = function () {
        return this.sal;
    };
    Employee.prototype.getattendence = function () {
        return this.attendence;
    };
    Employee.prototype.print = function () {
        console.log(this.empno, this.ename, this.sal, this.attendence);
    };
    return Employee;
}());
//  var emp=new Employee();
//  var emp1=new Employee();
//  emp1.empno=102;
//  var emp2=new Employee();
//  emp2.empno=103;
var emp = new Employee(101, "abc", 2000, 20);
var emp1 = new Employee(102, "hbc", 2050, 25);
var emp2 = new Employee(103, "lbc", 2100, 15);
var emp3 = new Employee(104, "obc", 2150, 18);
emp.print();
emp1.print();
emp2.print();
emp3.print();
var emparray = [emp, emp1, emp2];
emparray.forEach(function (element) {
    console.log(element);
});
var Employee1 = /** @class */ (function () {
    function Employee1(fname, mname, lname) {
        this.fname = fname;
        this.mname = mname;
        this.lname = lname;
    }
    Employee1.prototype.getMname = function () {
        return this.mname;
    };
    return Employee1;
}());
var e1 = new Employee1("a", "b", "c");
console.log(e1.getMname);
