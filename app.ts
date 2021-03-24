let studentId:number = 1234;
let studentName:string = "woo";
let age:number = 21;
let gender:string = "male";
let subject:string = "javascript";
let courseCompleted: boolean = false;

enum GenderType {   
    Male ="male",
    Female="female"
}

interface Student {
    studentId:number;
    studentName:string;
    age?:number;
    gender:'male' | 'female' | 'gender';
    subject:string;
    courseCompleted: boolean;
}

function getStudentDtails(studentId:number): Student {
    return {
        studentId:121,
        studentName:"mack",
        gender: 'male',
        subject:"Node",
        courseCompleted: true
    };
}
function saveStudentDeatils(student: Student):void {
    
}

saveStudentDeatils({
    studentId:12221,
    studentName:"mack",
    gender:"female",
    subject:"Node",
    courseCompleted: true
})