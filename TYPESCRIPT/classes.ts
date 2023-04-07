 class Employee{
  private readonly  empno:number;//it can assign value only in constructor
   private  ename:string;
   private  sal:number;
   private attendence:any;
    
public getempno():number{
    return this.empno;
}
public getename():string{
    return this.ename;
}
public getsal():number{
    return this.sal;
}
public getattendence():any{
    return this.attendence;
}
    // constructor(){
    //     this.empno=101;
    //     this.ename="abc";
    //     this.sal=20000;
        // this.attendence=18;
    // }


constructor(empno:number,ename:string,sal:number,attendence:any){
    this.empno=empno;
    this.ename=ename;
    this.sal=sal;
    this.attendence=attendence;
}//mo overloading in constructor

print():void{
    console.log(this.empno,this.ename,this.sal,this.attendence);
}
   
}  
 //  var emp=new Employee();
//  var emp1=new Employee();
//  emp1.empno=102;
//  var emp2=new Employee();
//  emp2.empno=103;
 let emp=new Employee(101,"abc",2000,20);
 let emp1=new Employee(102,"hbc",2050,25);
 let emp2=new Employee(103,"lbc",2100,15);
 let emp3=new Employee(104,"obc",2150,18);
 emp.print();
 emp1.print();
 emp2.print();
 emp3.print();


 var emparray:Employee[]=[emp,emp1,emp2];
 emparray.forEach(element => {
    console.log(element);
    
});

class Employee1{
    private fname:string;
    private mname:string;
    private lname:string;

    constructor(fname:string,mname:string,lname:string){
        this.fname=fname;
        this.mname=mname;
        this.lname=lname;

    }
    getMname():string{
        return this.mname;
    }
}
    let e1=new Employee1("a","b","c");
    console.log(e1.getMname);

    