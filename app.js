var studentId = 1234;
var studentName = "woo";
var age = 21;
var gender = "male";
var subject = "javascript";
var courseCompleted = false;
var GenderType;
(function (GenderType) {
    GenderType["Male"] = "male";
    GenderType["Female"] = "female";
})(GenderType || (GenderType = {}));
function getStudentDtails(studentId) {
    return {
        studentId: 121,
        studentName: "mack",
        gender: 'male',
        subject: "Node",
        courseCompleted: true
    };
}
function saveStudentDeatils(student) {
}
saveStudentDeatils({
    studentId: 12221,
    studentName: "mack",
    gender: "female",
    subject: "Node",
    courseCompleted: true
});
