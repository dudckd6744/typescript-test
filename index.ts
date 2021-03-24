type StrORNum = number | string ;
let itemPrice:number;

const setItemPrice = (price: StrORNum):void=>{
    if(typeof price === "string"){
        itemPrice = 0;
    }else{
        itemPrice = price
    }
}
setItemPrice(50);

/* {typeof 를 통해 코드검증을 수행하는a것 => 타입 가드}*/


/* 생서자를 이용한 타입스크립 (constructor)

    접근제한자(access Modifiers)
    -public(클라스 외부에서 접근가능)
    -private(클라시 내에서만 접근가능)
    -protected(클라스 내부, 상속받은 자식클라스에서 접근가능)
*/
class Employee {
    private _fullName: string;
    age:number;
    jopTitle:string;
    hourlyRate:number;
    workingHoursPerWeek:number;
    
    constructor(fullName: string,
        age:number,
        jopTitle:string,
        hourlyRate:number,
        workingHoursPerWeek:number){
            this._fullName= fullName;
            this.age = age;
            this.jopTitle = jopTitle;
            this.hourlyRate = hourlyRate;
            this.workingHoursPerWeek = workingHoursPerWeek;
        }
        get fullName(){
            return this._fullName;
        }

        set fullName(value:string){
            this._fullName = value
        }
    printEmpolyeeDetails = ():void =>{
        console.log(`${this._fullName}의 직엄은 ${this.jopTitle}이고
        일주일의 수입은 ${this.hourlyRate*this.workingHoursPerWeek}달러이다`)
    }
}
let employee1: Employee = new Employee('민수',28,'주니어개발자',40,33)
employee1.fullName = "헨리"
console.log(employee1.fullName)
employee1.printEmpolyeeDetails();
